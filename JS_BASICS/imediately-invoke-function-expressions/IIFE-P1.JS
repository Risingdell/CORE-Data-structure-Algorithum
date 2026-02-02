var createHelloWorld = function() {
    
    return function(...args) {
       return "Hello World";
        
        
    }
};



//tobe and not to be
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let maj=val;
    return{
     toBe(value){
        if(value===maj){
            return true;
        }else{
            throw new Error("Not Equal");
        }
    },
    
     notToBe(value){
        if(value!==maj){
            return true;
        }else{
            throw new Error("Equal");
        }
    }
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */


//counteer
/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    
    let counter=n;
    return function() {
        return counter++;
        
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */