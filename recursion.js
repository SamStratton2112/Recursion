/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
 if(i === nums.length) return 1;
 return nums[i] * product(nums, i+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, idx=0, curLongest=0) {
  // run if every word has been checked
  if(idx === words.length) return curLongest;
  // set cur longest to length of idx if greater than current longest
  curLongest = Math.max(words[idx].length, curLongest);
  // run this as long as idx !== word.length
  return longest(words, idx+1, curLongest)
}

/** everyOther: return a string with every other letter. */

function everyOther(str, len=0, strng='') {
    if(len >= str.length) return strng;
    strng += str[len];
    return everyOther(str, len+2, strng);
}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx=0) {
  let leftIdx = idx;
  let rightIdx = str.length - idx - 1;
  if (leftIdx >= rightIdx) return true;
  if (str[leftIdx] !== str[rightIdx]) return false;
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  if(idx === arr.length) return -1;
  if(arr[idx] === val) return idx
  return findIndex(arr, val, idx+1)
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx=0, copy='') {
  if(idx >= str.length) return copy;
  const arrStr = Array.from(str)
  const revStr = arrStr.reverse()
  copy+= revStr[idx]
  return revString(str, idx+1, copy)

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringsArr = [];
  for(let key in obj){
    if(typeof obj[key] === 'string') stringsArr.push(obj[key]);
    // if the value is an object then run gatherStrings again 
    if(typeof obj[key] === 'object'){
      stringsArr.push(
        // spread array and add the key value 
        ...gatherStrings(obj[key])
      )
    }
  }
  return stringsArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left=0, right=arr.length) {
  // handle missing val
  if(left>right){
    return -1
  }
  // get middle idx
  let mid = Math.floor((right + left)/2);
  // return idx of found value 
  if(arr[mid] === val) return mid;
  // determin next arr
  if(arr[mid]>val){
    return binarySearch(arr, val, left, mid-1);
  }else{
    return binarySearch(arr, val, mid+1, right);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
