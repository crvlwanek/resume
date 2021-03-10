const convertDate = date => {
  const t = date.toDateString().split(/[- :]/)

  // Apply each element to the Date function
  const d = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5])
  const out = new Date(d)
  return out
}

export default convertDate
