let minHeap=function(){


    let array=[null];

    this.insert=function(val){
        array.push(val);
        if(array>2){
            let idx=array.length-1;
            while(array[idx]<array[idx/2]){
                if(idx>1){

               
                [array[idx/2],array[idx]]=[array[idx],array[idx/2]];
                if(idx/2>1){
                    idx=Math.floor(idx/2);
                }else{
                    break;
                }

                }


                
            }
            


        }

    }
}