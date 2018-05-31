const xprod = (aList, bList) => {
  const res = []

  aList.forEach(aItem => {
    bList.forEach(bItem => {
      res.push([aItem, bItem])
    })
  })

  return res
}

export default xprod
