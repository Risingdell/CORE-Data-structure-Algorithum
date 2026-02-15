let minHeap=function(){


    let array=[null];

    this.insert=function(val){
        array.push(val);
        if(array.length>2){
            let idx=array.length-1;
            if(idx>1){
                while(array[idx]<array[Math.floor(idx/2)]){
                
                    [array[Math.floor(idx/2)],array[idx]]=[array[idx],array[Math.floor(idx/2)]];
                    if(Math.floor(idx/2)>1){
                        idx=Math.floor(idx/2);
                    }else{
                        break;
                    }

                

                
                }
            }
            


        }

    }
    this.remove=function(){
        let smallest=array[1];
        if(array.length>2){
            array[1]=array[array.length-1];
            array.pop();
            if(array.length===3){
                if(array[1]>array[2]){
                [array[1],array[2]]=[array[2],array[1]];
                }
                return array;
            }
            let i=1;
            let left=i*2;
            let right=i*2+1;
            while(array[i]>=array[left]||array[i]>=array[right]){
                if(array[left]<array[right]){
                    [array[i],array[left]]=[array[left],array[i]];
                    i=left;
                }else if(array[right]<array[left]){
                    [array[i],array[right]]=[array[right],array[i]];
                    i=right;
                }
                left=i*2;
                right=i*2+1;
                if(array[left]===undefined||array[right]===undefined){
                    break;
                }
                
            }

        }else if(array.length==2){
            
            
            array.pop();
        }else{
            return null;
        }

        return smallest;
        
        
    }

    this.print=function(){
        return array;
    }
    
}

let pre= new minHeap();
pre.insert(8);
pre.remove();
pre.remove();
console.log(pre.print());
