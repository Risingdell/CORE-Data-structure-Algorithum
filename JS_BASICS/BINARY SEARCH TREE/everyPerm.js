// var numTrees = function(n) {
//     let total=[];
//     for(let i=1;i<=n;i++){
//         total.push(i);
//     }
     
// };

// console.log(numTrees(4));

// let permuta= function(n){
//     if(n==1)return 1;


//     return n*permuta(n-1);
// }

// console.log(permuta(5));

let permutations=function(arr){
        result=[[]];

        for( let num of arr){
            let newResult=[];

            for(let evVal of result){
                for(let i=0;i<=evVal.length;i++){
                    const newRes=[
                        ...evVal.slice(0,i),
                        num,
                        ...evVal.slice(i)

                        
                    ]
                    newResult.push(newRes);
                }
                
                
            }
            result=newResult;
        }
        return result;
    }

console.log(permutations([1,2,3]));