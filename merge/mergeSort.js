const merge = (left, right) => {
  const middle = []

  while (left.length > 0 && right.length > 0) {
    if (left[0] < right[0]) {
      middle.push(left.shift())
    } else {
      middle.push(right.shift())
    }
  }

  left.length > 0 ? middle.push(...left) : middle.push(...right)

  return middle
}

const sort = arr => {
  if (arr.length === 1) return arr
  const left = arr.slice(0, Math.floor(arr.length / 2))
  const right = arr.slice(Math.floor(arr.length / 2))
  return merge(sort(left), sort(right))
}

const unsorted = [
36, 24, 14, 81, 13, 35, 9, 20, 92, 85, 23, 71, 
73, 42, 96, 39, 78, 72, 50, 88, 87, 90, 68, 8, 
32, 79, 30, 55, 62, 46, 29, 44, 84, 98, 11, 12, 
74, 27, 54, 4, 40, 52, 64, 63, 51, 37, 28, 99, 
38, 17, 7, 58, 60, 95, 6, 91, 2, 70, 33, 86, 15, 
80, 76, 66, 41, 49, 89, 45, 47, 25, 83, 16, 10, 
43, 94, 97, 22, 18, 3, 34, 59, 67, 77, 21, 53, 19, 
82, 26, 93, 56, 5, 31, 75, 100, 65, 57, 61, 1, 48, 69
]

console.log(sort(unsorted))
