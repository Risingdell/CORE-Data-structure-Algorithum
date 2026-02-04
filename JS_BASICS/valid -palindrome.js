/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    
    
    let skip= function(l,r){
        while(l<=r){
            if(s[l]!==s[r]){ return false};
            l++;
            r--;
        }
        return true;
        
    }
    

    let i=0;
    let j=s.length-1;
    while(i<j){
        if(s[i]!==s[j]){
            return skip(i+1,j)|| skip(i,j-1);
        }
        i++;
        j--;
    }
    return true
    
};

let s = "abca"
console.log(validPalindrome(s));