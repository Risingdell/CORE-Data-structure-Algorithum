let minHeap=function(){

    let arr=[null];

    this.insert=function(val){
        arr.push(val);
        let ele=arr.length-1;

        while(ele>1 &&  arr[ele]<arr[Math.floor(ele/2)]){
            [arr[ele],arr[Math.floor(ele/2)]]=[arr[Math.floor(ele/2)],arr[ele]];
            ele=Math.floor(ele/2);

        }
    }

    this.remove=function(){
        let smallest=arr[1];
        if(arr.length<0){
            return null;
        }
        if(arr.length===2){
            arr.pop();
        }
        arr.pop();

        let i=1;
        while(true){
            let left=i*2;
            let right=i*2+1;
            let smallestIn=i;
            if(left<arr.length && arr[left]<arr[smallestIn]){
                smallestIn=left;
            }
            if(right<arr.length && arr[right]<arr[smallestIn]){
                smallestIn=right;
                

            }
            if(i===smallestIn){ break};

            [arr[smallestIn],arr[i]]=[arr[i],arr[smallestIn]];

            i=smallestIn;




        }
    }

    this.display=function(){
        return arr;
    }
}

let heap=new minHeap();
heap.insert(9);
heap.insert(10);
heap.insert(12);
heap.insert(4);
heap.remove();
heap.remove();
console.log(heap.display());

