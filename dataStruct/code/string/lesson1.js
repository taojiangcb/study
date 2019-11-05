export default str => {
  return str.split(' ')
    .map(item => {
      return item.split('').reverse().join('');
    })
    .join(' ')
}