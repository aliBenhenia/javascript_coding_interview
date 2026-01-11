import reverseString from "./reverse_string"

const isPalindrome = (str) => {
  let i = 0;
  let j = str.length - 1;

//   while (i < j) {
//     if (str[i] !== str[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
    const reversed = reverseString(str);
  return true;
};

console.log(isPalindrome("sabas")); // true
