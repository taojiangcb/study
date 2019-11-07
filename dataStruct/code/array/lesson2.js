var hasGroupsSizeX = function (deck) {
  if (deck.length === 0) return false;
  if (deck.length === 1) return false;
  let source = deck.sort((a, b) => { return a - b });
  let dist = [], tmp = [], min = Number.MAX_SAFE_INTEGER, len = source.length, i = 0;
  let group = [];
  if (len === 0) return false;
  for (i; i < len; i++) {
    tmp.push(source[i]);
    for (j = i + 1; j <= len; j++) {
      if (tmp[0] === source[j]) tmp.push(source[j]);
      else {
        i = j - 1;
        min = Math.min(min, tmp.length);
        group.push(tmp.length);
        dist.push(tmp);
        tmp = [];
        break;
      }
    }
  }

  if (min < 2) return false;
  let gcd = (a, b) => {
    if (b === 0) {
      return a
    } else {
      return gcd(b, a % b);
    }
  }

  while (group.length > 1) {
    let a = group.shift()
    let b = group.shift()
    let v = gcd(a, b)
    if (v === 1) {
      return false
    } else {
      group.unshift(v)
    }
  }
  return group.length ? group[0] > 1 : false
};

