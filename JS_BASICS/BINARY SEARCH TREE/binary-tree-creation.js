function TreeNode(val){
    this.val=val;
    this.left=null;
    this.right=null;
}

function BST(vals){
    if(vals.length<=0){return };

    function insert(left,right){
        if(left>right){return null};

        let mid=Math.floor((left+right)/2);

        let root=new TreeNode(vals[mid]);

        root.left=insert(left,mid-1);
        root.right=insert(mid+1,right);
        return root;
        
    }
    return insert(0,vals.length-1);

}

console.dir(BST([2,3,4,5,6,7,8,9]),{depth:null});