function palindrome(num) {
  let temp = num;
  let reversed = 0;
  for (; num > 0; ) {
    reversed = reversed * 10 + (num % 10);
    num = Math.floor(num / 10);
  }

  if (reversed === temp) {
    console.log("it is palindrome");
  } else {
    console.log("it is not palindrome ");
  }
}

palindrome(121);
palindrome(234);
palindrome(135);
palindrome(141);

