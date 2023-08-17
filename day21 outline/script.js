let form = document.getElementById("form");
form.addEventListener("submit",formdata);
function formdata(){
event.preventDefault();
console.log("indside form")

let name=document.getElementById("name").value;
let email=document.getElementById("email").value
let mobile=document.getElementById("mobile").value
let gender=document.getElementById("gender").value
console.log(name)
console.log(email,mobile,gender)

}