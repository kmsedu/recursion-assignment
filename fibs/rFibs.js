const rFibs = n => {
  if (n === 0) return [0]
  if (n === 1) return [0, 1]

  const arr = rFibs(n - 1)

  return [...arr, arr[n - 1] + arr[n - 2]]
}

console.log(rFibs(8))
