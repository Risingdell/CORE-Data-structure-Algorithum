/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i=0;
    let j=1;
    while(j<nums.length){
        if(nums[i]===0 &&nums[j]!=0){
            let temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
            i++;

        }
        if(nums[i]!=0){
            i++;
        }
        
        j++;
    }
    console.log(nums);
    
};

moveZeroes([0,1,0,3,12]);