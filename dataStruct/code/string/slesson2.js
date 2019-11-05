export default s => {
  let res = [];

  match(0, s, res);

  return res.length;
}

function match(index, s, res) {

  let len = s.length;
  if (index >= len) return res;

  let t = [];
  for (var i = index; i < len; i++) {
    t.push(s[i]);
    let tlen = t.length;
    if (tlen % 2 === 0) {

      let f = t[0];
      let e = t[tlen - 1];
      let oright = f !== e;
      if (!oright) continue;

      oright = (t.slice(tlen / 2).lastIndexOf(f) === -1);
      if (!oright) continue;
      
      oright = (t.slice(0, tlen / 2).lastIndexOf(e) === -1);
      if (!oright) continue;

      if (oright) {
        res.push(t);
        break;
      }
    }
  }
  match(index + 1, s, res);
}