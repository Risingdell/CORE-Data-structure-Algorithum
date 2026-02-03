/**
 * @param {Function} fn
 * @return {Function}
 */


var once = function(fn) {
    let total=0;
    
   
        
    
        
    return function(...args){
        while(total===0){
        
            total+=fn(...args);
            
            console.log(total)
        }return undefined;
        
        
    }
    

};


  let fn = (a,b,c) => (a + b + c)
  let onceFn = once(fn)
 
  onceFn(1,2,3); // 6
  onceFn(2,3,6); // returns undefined without calling fn
 
