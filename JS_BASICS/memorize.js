// /**
//  * @param {Function} fn
//  * @return {Function}
//  */
// function memoize(fn) {
    
//     return function(...args) {
        
//     }
// }



//  let callCount = 0;
// const memoizedFn = memoize(function (a, b) {
//  callCount += 1;
//  return a + b;
// })
// memoizedFn(2, 3) // 5
// memoizedFn(2, 3) // 5
// console.log(callCount) // 1 
 

// function factorial(n){
//     let fact=0
//             if(n<=1){return 1}
//             return n*factorial(n-1);
//         }
//         console.log(factorial(5));


// let fib=(function l(n){
//     if(n<=1){
//         return 1;
//     }
//    return l(n-1)+l(n-2);
// })(7);

// console.log(fib);


function factorial(n){
            if(n<=1){return 1}
            return n*factorial(n-1);
        }

        console.log(factorial(5))
        