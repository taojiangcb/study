
function telCombin(digits) {
  if (!digits) return [];
  function combin(arr) {
    if (arr.length < 2) return arr[0];
    var tmp = [];
    for (var i = 0; i < arr[0].length; i++) {
      for (var j = 0; j < arr[1].length; j++) {
        tmp.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    arr.splice(0, 2, tmp);
    return combin(arr);
  }

  var chars = ['', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  var num = String(digits).split('');
  if (num.length === 1) return chars[num[0]].split('');
  var code = num.map(function (item) {
    return chars[item];
  })
}

export default telCombin;