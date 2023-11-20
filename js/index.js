

  const loginPopup = document.querySelector(".login-popup");
  // const close = document.querySelector(".close");


  window.addEventListener("load",function(){
 
  //  showPopup();
   setTimeout(function(){
     loginPopup.classList.add("show");
   },0);

  })

  // function showPopup(){
  //       const timeLimit = 5 // seconds;
  //       let i=0;
  //       const timer = setInterval(function(){
  //        i++;
  //        if(i == timeLimit){
  //         clearInterval(timer);
  //         loginPopup.classList.add("show");
  //        } 
  //        console.log(i)
  //       },1000);
  // }


  // close.addEventListener("click",function(){
  //   loginPopup.classList.remove("show");
  // })


// registrion form




// const loginPopup = document.querySelector(".c_login-popup");
// const close = document.querySelector(".c_close");


// window.addEventListener("load",function(){

// //  showPopup();
//  setTimeout(function(){
//    loginPopup.classList.add("show");
//   },0)
  
// })
// window.location.href="./courses.html"

// function showPopup(){
//       const timeLimit = 5 // seconds;
//       let i=0;
//       const timer = setInterval(function(){
//        i++;
//        if(i == timeLimit){
//         clearInterval(timer);
//         loginPopup.classList.add("show");
//        } 
//        console.log(i)
//       },1000);
// }


// close.addEventListener("click",function(){
//   loginPopup.classList.remove("show");
// })



// Registration

let name1 = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("pass");

// console.log(email);

function c_signUp(){
  // alert("ppp")
  
  // console.log("email--->",email.value);
  // console.log(pass.value);
  window.localStorage.setItem('name',name1.value);
  window.localStorage.setItem('email',email.value);
  window.localStorage.setItem('password',pass.value);


  window.location.href='../index.html';

  // alert("kkk")
}
// c_signUp();


// login javascript 
let getEmail = window.localStorage.getItem('email');
let getPass = window.localStorage.getItem('password');
let getName = window.localStorage.getItem('name');

function c_submit(){
  // alert("hhh");
 
// console.log(name1.value)
// console.log(email.value)
// console.log(pass.value)

// console.log(getEmail)
// console.log(getPass)
// console.log(getName)






  if(email.value==getEmail && pass.value==getPass && name1.value==getName ){
    window.location.href = "/page/firstPage.html";
  }

  else if (getPass !== pass.value){
    alert("Enter a Valid Password");
  }
  else if (getEmail !==email.value) {
    alert("Enter a valid Email id");
  }
  else if (getEmail !==email.value && getPass !== pass.value && getName !==name1.value) {
    alert("Enter a valid Email id and password--->");
  }
  else {
    console.log("plese enter a valid email id and password");
  }
 
}