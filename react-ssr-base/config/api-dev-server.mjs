const express =require('express');
import cors from 'cors';
import { API } from '../src/api/API';

var app = express();

app.use(express.static('public'));
app.use(cors());

app.get(API.GET_HOME_LIST, (req, res) => {
  console.log('api.................... ' + API.GET_HOME_LIST);
  res.send('aabbcc');
})

app.listen(3010, () => { console.log('api server start....'); })
