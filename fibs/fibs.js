const fibs = n => {
  const nums = [0, 1]

  if (n === 1) return [0]
  if (n === 2) return nums

  for (let i = 2; i < n; i++) {
    nums.push(nums[i - 1] + nums[i - 2])
  }

  return nums
}

console.log(fibs(8))
