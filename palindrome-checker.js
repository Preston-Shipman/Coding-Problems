function palindrome(str) {
  const regex = /[^a-zA-Z\d\s:\u00C0-\u00FF]/g;
  let lowerCase = str.toLowerCase();
  let arrStr = lowerCase.split();
  let reverse = arrStr.reverse();
  let reverseStr = reverse.join();
  // let map = new Map();
  // let string = map.forEach(lowerCase)
  console.log(lowerCase)
  console.log(reverseStr)
  if (lowerCase == reverse) {
    return true;
  }
  else {
    return false;
  }
}



palindrome("eye");
