const nums = new Set();
while(nums.size !== 6) {
  nums.add(Math.floor(Math.random() * 100) + 1);
}

console.log([nums]);