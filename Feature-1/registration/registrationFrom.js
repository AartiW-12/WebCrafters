let userNameInput = document.getElementById("username");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");
let roleSelect = document.getElementById("role");
let registrationForm = document.querySelector(".registration-form form");
registrationForm.addEventListener("submit", function(event) {
    event.preventDefault(); 
   // console.log("email",emailInput.value);
   // console.log("password",passwordInput.value);
   // console.log("username",userNameInput.value);
   // console.log("role",roleSelect.value);
   let users = JSON.parse(localStorage.getItem("users")) || [];
   let newUser = {
    name : userNameInput.value,
    email : emailInput.value,
    password : passwordInput.value,
    role : roleSelect.value
   };
 // validating that email is unique
 let existingEmail = users.find(u=>u.email === newUser.email);
 if(existingEmail){
    alert("Email already registered. Please use a different email.");
    return;
 }

   users.push(newUser);
   console.log(users);
   localStorage.setItem("users",JSON.stringify(users));
   alert("Registration Successful!");
   userNameInput.value = "";
   emailInput.value = "";
   passwordInput.value = "";
   roleSelect.value = "";

   window.location.href = '../dashboard/userDashboard.html';
});


    