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
  matchedRouters.map(item => {
    if (item.route.loadData) {
      promisess.push(item.route.loadData(store));
    }
  });

  /** 相关的promiss 处理完成之后 开始渲染page */
  Promise.all(promisess)
    .then(load => {
      let html = render(store, req);
      res.send(html);
    });
})

app.listen(3000, () => { console.log('ssr server start....'); })
