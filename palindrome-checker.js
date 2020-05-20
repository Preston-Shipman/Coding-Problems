function palindrome(str) {
  const regex = /[\W_]/g;
  let arrStr = str.replace(regex, "").toLowerCase();
  let reverseArrStr = str.replace(regex, "").toLowerCase().split("").reverse().join("");
  return arrStr === reverseArrStr;
}
palindrome("eye");
