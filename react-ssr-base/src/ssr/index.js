import express from 'express';
import { render } from './Render';

var app = express();
app.use(express.static('public'));

app.get('*', (req, res) => {
  let html = render(req);
  res.send(html);
})

app.listen(3000, () => { console.log('ssr server start....'); })
