const a = (grp = 0) => {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => {
    if (n % 7 === 0) {
      grp = grp + 1
    }
    return { n, grp }
  })
}

console.log(a())
