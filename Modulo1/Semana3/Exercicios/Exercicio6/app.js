const retornaPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

console.log(retornaPalindrome("ana"));
console.log(retornaPalindrome("emanuel"));
