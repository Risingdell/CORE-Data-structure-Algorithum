/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {

    let i=0;
    let j=height.length-1;
    let maxArea=0;
    while(i<j){
        let length=Math.min(height[i],height[j]);
        let breadth=j-i;
        let area=length*breadth;
        maxArea=Math.max(maxArea,area)
        if(height[i]<height[j]){
            i++;
        }else{
            j--;
        }
        
        

    }
    return maxArea
    
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))