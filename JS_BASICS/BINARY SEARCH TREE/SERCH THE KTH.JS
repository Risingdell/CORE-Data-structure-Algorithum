/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {

    let array= new Array();

    function inOrder(node){
        if(!node){return};
        
        inOrder(node.left);
        array.push(node.val);
        inOrder(node.right);
        
        
    }
    inOrder(root);
    array.sort((a,b)=>{return a-b});
    let find=k-1;

    for(let i=0;i<array.length;i++){
        if(i===k){
            return array[i];
        }
    }
    
};

let root =[3,1,4,null,2];
k =1;

console.log(kthSmallest(root,k));