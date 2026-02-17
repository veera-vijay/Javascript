let start = 100,
  end = 150;
for (num = start; num <= end; num++) {
  let temp = num;
  let reversed = 0;
  while (temp > 0) {
    reversed = reversed * 10 + (temp % 10);
    temp = Math.floor(temp / 10);
  }
  if (num == reversed) console.log(num);
}
