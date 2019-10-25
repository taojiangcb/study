const express =require('express');
import { API } from '../src/api/API';
var app = express();
app.use(express.static('public'));

app.get(API.GET_HOME_LIST, (req, res) => {
  console.log('api ' + API.GET_HOME_LIST);
})

app.listen(3010, () => { console.log('api server start....'); })
