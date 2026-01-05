const username= document.getElementById('username');
const password= document.getElementById('password');
const loginBtn= document.getElementsByClassName('login-button')[0];

loginBtn.addEventListener('click', (e)=> {
    e.preventDefault();
    validateLogin(username.value, password.value);
    const loggedInUsers = JSON.parse(localStorage.getItem('loggedInUsers')) || [];
    loggedInUsers.push({ username: username.value, action: "Login", loginTime: new Date().toISOString() });

    //isLoggedIn remains do later
    localStorage.setItem('loggedInUsers', JSON.stringify(loggedInUsers));

    const userLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn')) || [];

    if(userLoggedIn.length > 0){
        // userLoggedIn = { name: username.value, loginStatus: true };
        // const updatedData = [...userLoggedIn ,loginStatus:true];
        // localStorage.setItem('isLoggedIn', JSON.stringify(userLoggedIn));

        localStorage.setItem('isLoggedIn', JSON.stringify({ name: username.value, loginStatus: true }));
    } else {
        userLoggedIn.push({ name: username.value, loginStatus: true });
        localStorage.setItem('isLoggedIn', JSON.stringify(userLoggedIn));
    }
    // userLoggedIn.push({ name: username.value, loginStatus: true });
    // localStorage.setItem('isLoggedIn', JSON.stringify(userLoggedIn));

});

function getUserData() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    console.log(users);
    return users;
}

function validateLogin(user, pass) {
    const users = getUserData();
    const validUser = users.find(u => u.name === user && u.password === pass);
    console.log(validUser);
    if (validUser) {
        const role = validUser.role;
        if(role === 'admin') {
            window.location.href = '../dashboard/adminDashboard.html';
        }
        else{
            window.location.href = '../dashboard/userDashboard.html';
        }
        
    } else {
        alert('Invalid username or password.');
    }
}

