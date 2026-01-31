/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.split('');
    let reIndex=0;
    for(let i=0;i<s.length;i++){
        let key=s[i].toUpperCase();
        if((key>='A'&& key<='Z')|| (key>='0'&&key<='9')){
            s[reIndex]=key;
            reIndex++;
        }
    }
    s=s.slice(0,reIndex);
    


    let i=0;
    let j=s.length-1;
    while(i<j){
        if((s[i]==s[j])){
            i++;j--;
            

        }else{
            return false;
        }

    }
    return true;
    


    
};
console.log(isPalindrome("0p"));