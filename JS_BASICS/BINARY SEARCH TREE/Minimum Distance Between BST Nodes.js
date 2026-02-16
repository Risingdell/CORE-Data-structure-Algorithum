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
 * @return {number}
 */
var minDiffInBST = function(root) {
    let map={};
    let result=[];



    function inorder(root){
        if(!root)return null;

        inorder(root.left);
        result.push(root.val);
        inorder(root.right);

    }
    inorder(root);

    
    let j=result.length-1;
    let i=j-1;
    let min=Infinity;
    while(j>=0){
        let diff=result[j]-result[i];
        if(diff>=0){
            if(diff<min){
            min=diff
        }
            
        }
        
        j--;
        i--;
        
    }
    return min;
    
};