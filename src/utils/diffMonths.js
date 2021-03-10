const diffMonths = (date1, date2) => {
  var diff = (date2.getTime() - date1.getTime()) / 1000
  diff /= 60 * 60 * 24 * 7 * 4
  return Math.abs(Math.round(diff))
}

export default diffMonths
