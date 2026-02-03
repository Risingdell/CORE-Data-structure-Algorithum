
const adding=function (a,b){
    return new Promise((resolve,reject)=>{

        if(typeof a==="number" && typeof b ==="number"){
            resolve(a+b);
        }else{
            reject("the erorr is found")
        }

    })
}


setTimeout(()=>{
    adding(10,20).then((data)=>console.log(data))
    .catch((err)=>console.error(err) );

},2000
)