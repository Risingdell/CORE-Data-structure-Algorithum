// /**
//  * @param {number[]} height
//  * @return {number}
//  */
// var trap = function(height) {
//     let n=height.length;
//     if(n===0){return false}

//     let prefixMax=new Array();
//     let suffixMax=new Array();
//     prefixMax[0]=height[0];
//     for(let i=1;i<n;i++){
//         prefixMax[i]=Math.max(prefixMax[i-1],height[i]);
//     }
//     suffixMax[n-1]=height[n-1];
//     for(let i=n-2;i>=0;i--){
//         suffixMax[i]=Math.max(suffixMax[i+1],height[i]);
//     }

//     let water=0;
//     for(let i=0;i<n;i++){
//         water+=Math.min(prefixMax[i],suffixMax[i])-height[i];
//     }

//     return water;
// };
// console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))


/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
   let left=0;let right=height.length-1;
   let leftMax=0;
   let rightMax=0;
   let water=0;
   while(left<right){
    if(height[left]<=height[right]){
        if(height[left]>=leftMax){
            leftMax=height[left];
        }else{
        water+=leftMax-height[left];
        }
        left++;

    }else{
    if(height[right]>=rightMax){
        rightMax=height[right];

    }else{
    water+=rightMax-height[rigth];
    }
    right--;
   }
   
}
return water

}
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]));
