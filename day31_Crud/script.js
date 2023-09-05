async function getdata()
{
event.preventDefault()
let productform=document.getElementById("product_form");
let id=productform.nid.value;
let productName=productform.productName.value;
let productPrice=productform.productPrice.value
let productImg=productform.productImage.value
let obj={
   id,
   productName,
   productPrice,
   productImg
}
// console.log(obj)
// post or add data to data base
 await fetch(`http://localhost:3000/products`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
   "Content-Type":"application/json"
    }


})

//update request
}

async function updateData()
{
event.preventDefault()
let productUpdateform=document.getElementById("productUpdate_form");
let id=productUpdateform.nid.value;
let productName=productUpdateform.productName.value;
let productPrice=productUpdateform.productPrice.value
let productImg=productUpdateform.productImage.value
let obj={
   id,
   productName,
   productPrice,
   productImg
}
// console.log(obj);
// post or add data to data base
 await fetch(`http://localhost:3000/products/${id}`,{
    method:"PATCH",
    body:JSON.stringify(obj),
    headers:{
   "Content-Type":"application/json"
    }


})


// update

    // let res= await fetch("http://localhost:3000/posts/2",{
    //     method:"PATCH",
    //     body:JSON.stringify({name:"moon"}),
    //     headers:{
    //    "Content-Type":"application/json"
    //     }
    // })
    // let data=await res.json()
    // console.log(data)




}

async function deletedata(){


   let delid=document.getElementById("deleteid").value;

   await fetch(`http://localhost:3000/products/${delid}`,{
      method:"DELETE",
    
  })
}
let container=document.getElementById("container");
async function submited(){
   container.innerHTML="";
   
    
    let mydata= await fetch(`http://localhost:3000/products`)

   //  console.log(mydata)
    let finaldata= await mydata.json(); 
   //  console.log(finaldata.S)   
//  console.log(finaldata)

finaldata.forEach(display);

}
submited()
// function surf(el,i,arr){
//    console.log(el)

// }

function display(el,i,arr){
   
    
   let card=document.createElement("div");
   card.setAttribute("class","card");
   let poster=document.createElement("img");
   poster.src=el.productImg
   poster.setAttribute("id","poster")
   let title=document.createElement("h1");
    title.innerText=el.productName;
    title.setAttribute("id","title")
   let price=document.createElement("h2");
 price.innerText=el.productPrice;
 price.setAttribute("id","year")
   card.append(poster,title,price)
   container.append(card)
   
   }
let num=89;
console.log(`oqpqwpejqwe is ${num}`)
console.log(`this is number value ${num}`)
