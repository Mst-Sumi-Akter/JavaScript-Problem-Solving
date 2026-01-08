function isPalindrome(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}

console.log(isPalindrome("madam")); //palindrome because it reads the same forward and backward.
console.log(isPalindrome("hello")); //not a palindrome