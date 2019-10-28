const express = require('express');
import cors from 'cors';
import { API } from '../src/api/API';
import { HomeListData } from '../src/api/HomeList';

var app = express();
app.use(express.static('public'));
app.use(cors());

app.get(API.GET_HOME_LIST, (req, res) => {
  let datas = HomeListData.data;
  res.send(datas);
})

app.listen(3010, () => { console.log('api server start....'); })
