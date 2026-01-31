/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   

    let i=m-1;
    let j=n-1;
    let reIndex=m+n-1;
    while( j>=0){
        if(i>=0 && nums1[i]>nums2[j]){
            nums1[reIndex]=nums1[i];
            reIndex--;
            i--;
        }else {
            nums1[reIndex]=nums2[j];
            j--;
            reIndex--;

        }

    }
    
    return nums1;

};

console.log(merge([0],0,[1],1));