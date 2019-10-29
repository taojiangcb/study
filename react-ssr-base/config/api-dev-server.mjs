const express = require('express');
import cors from 'cors';
import { API } from '../src/api/API';
import { HomeListData } from '../src/api/HomeList';
import { TranslateListData } from '../src/api/TranslateList';

var app = express();
app.use(express.static('public'));
app.use(cors());

let RESP = {
  success: false,
  data: {},
  code: 0,
  msg: "",
}

//login 转态
let loginMap = new Map();
let apiRouter = express.Router();

let login = (req,res,next)=> {
  let { user } = req.query;
  if (!loginMap.has(user)) {
    loginMap.set(user, true);
  }
  let data = Object.assign(RESP, { success: true });
  res.send(data);
}

apiRouter.post(API.IS_LOGIN,(req,res,next)=> {
  login(req,res,next);
})

apiRouter.post(API.LOGIN, (req, res, next) => {
  login(req,res,next);
})

apiRouter.post(API.LOGOUT, (req, res) => {
  let { user } = req.query;
  if (user) {
    loginMap.delete(user);
  }
  let data = Object.assign(RESP, { success: false, code: 1 });
  res.send(data);
})

apiRouter.post(API.TRANSLATE, (req, res) => {
  let { user } = req.query;
  let resData = Object.assign(RESP, {});
  if (loginMap.has(user)) {
    resData.success = true;
    resData.data = TranslateListData.data;
  }
  else {
    resData.success = false;
    resData.code = 1;
  }
  res.send(resData);
})

/**获取主页列表 */
apiRouter.get(API.GET_HOME_LIST, (req, res) => {
  let datas = HomeListData.data
  res.send(datas);
})

app.use(apiRouter);
app.listen(3010, () => { console.log('api server start....'); })
