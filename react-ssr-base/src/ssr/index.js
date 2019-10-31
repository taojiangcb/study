import express from 'express';
import { render } from './Render';
import { matchRoutes } from 'react-router-config';
import { ssrStore } from '../store/Store';
import { Routers } from '../Routers';

var app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  //获取一个 sotre() 的实例
  let store = ssrStore();
  //匹配当前的路由 
  let matchedRouters = matchRoutes(Routers, req.path);
  //get到相关的promiese
  let promisess = [];

  matchedRouters.forEach(item => {
    if (item.route.loadData) {
      //数据转载的时候容错处理，不管接口是否请求成功，最后都要进行渲染，失败的接口最多不显示内容而已。
      let promise = new Promise((resolve, reject) => {
        item.route.loadData(store)
          .then(resolve)
          .catch(resolve)
      });
      promisess.push(promise);
    }
  });

  /** 相关的promiss 处理完成之后 开始渲染page */
  Promise.all(promisess)
    .then(load => {
      //定义服务器的路由渲染的穿透参数
      let context = {};
      let html = render(store, req, context);
      if (context.action === 'REPLACT') {
        res.redirect(301, context.url);
      }
      else if (context.NOT_FUND) {
        res.status(404);
      }
      res.send(html);
    });
})

app.listen(3000, () => { console.log('ssr server start....'); })
