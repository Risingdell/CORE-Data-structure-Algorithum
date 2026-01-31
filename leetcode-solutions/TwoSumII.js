/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    
    let i=0;
    let j=i+1;
    while(j<numbers.length){
        let result=numbers[i]+numbers[j];
        if(result===target){
            i++;
            j++;
            return [i,j];
        }
        j++;
        if(j>numbers.length-1){
            i++
            j=i+1;
        }
    if(i===numbers.length-1){
        return false;
    }
        
    }
    
    
};


console.log(twoSum([-10,-8,-2,1,2,5,6],0));


//FAILEDCODES

// let map={};

    // for(let i=1;i<numbers.length;i++){
    //     map[numbers[i]]=(map[numbers[i]]||0)+1;
    // }
    // for(let i=0;i<numbers.length;i++){
       
    //     let needed=target-numbers[i];
    //     if(map[needed]!==undefined){
    //         i++;
    //         let index=numbers.indexOf(needed);
    //         index++;
    //         return[i,index];
            
    //     }
    // }