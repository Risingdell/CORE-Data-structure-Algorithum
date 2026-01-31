// // Input: nums = [1,1,1,2,2,3]
// // Output: 5, nums = [1,1,2,2,3,_]

// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var removeDuplicates = function(nums) {

//     let  map={

//     };
    
//     for(let i=0;i<nums.length;i++){
//         map[nums[i]]=(map[nums[i]]||0)+1;

//     }
//     let map1={

//     }
//     let reindex=0;
//     let count=0;
//     let i=0
//     while(i<nums.length){
//         let kay=nums[i];
//         if(kay !==nums[i-1]){
//             count=0;
//         }
//         if(map[kay]){
//             if(count==2){
//                 i++;
//                 continue;
//             }
//             nums[reindex]=kay;
//             reindex++;
//             count++;
//         }
//         i++;

//     }
//     for(let i=0;i<nums.length;i++){
//         map1[nums[i]]=(map1[nums[i]]||0)+1
//     }
//     let k=nums.length-1
//     while(k>=0){
//         let kay=nums[k];
//         if(map1[kay]>map[kay]){
//             nums.pop();
//             map1[kay]--;
//         }
//         k--;

//     }
//     let c=0;
//     c=nums.length;

//     return c;

    
    
// };



function removeDuplicates(nums){
    let count=0;
    for(let n of nums){
        if(count<2 || n != nums[count-2] ){
            nums[count]=n;
            count++;
        }

    }
    return count;
}

console.log(removeDuplicates([1,1,1]));