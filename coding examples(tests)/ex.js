// const ApiCalling= async ()=>{
    
//     try {
//         let response = await fetch("https://fakestoreapi.com/products/1")
     
//             // const data=await response.json()
//         //  console.log("response");
//          console.log(response);
         
        
//     } catch (error) {
//         console.log("error");
        
//     }

// }
// ApiCalling();

const PromiseOne=new Promise((resolve,reject)=>{

   const response= fetch("https://fakestoreapi.com/products/1")
})
PromiseOne.then(()=>{
    console.log(response);
    
}).catch(()=>{
    console.log("error");
    
}).finally(()=>{
    console.log("final done");
    
})
