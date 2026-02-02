/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    
    for(let i=0;i<arr.length;i++){
        let ele=arr[i];
        arr[i]=fn(ele,i);
    }
    return arr;
    
};

let  arr = [1,2,3];
let  fn = function plusI(n, i) { return n + i; }
console.log(map(arr,fn))