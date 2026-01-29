/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {

    let i=0;
    let j=0;
    while(i<s.length){
        
        if(s[i]===t[j]){
            i++;
            j++;
        }else if(s[i]!==t[i]){
            j=0;
            i++;
        }else{
            i++;
        }

        if(j===t.length-1){
            return true
        }

        
        
    }
    return false;
    

};
console.log(isAnagram("anagram","nagram"))