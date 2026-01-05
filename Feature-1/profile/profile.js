const profileCard = document.getElementById('profile-card');
const logout= document.getElementById('logout');


const userData = localStorage.getItem('users');
if(userData){
    const user = JSON.parse(userData);
    console.log(user);
    const div = document.createElement('div');
    div.innerHTML = `
    <h2>User Profile</h2>
    <p ><strong>Name:</strong> ${user[0].name}</p>
    <p><strong>Email:</strong> ${user[0].email}</p>
    <p><strong>Role:</strong> ${user[0].role}</p>
    `;

    profileCard.appendChild(div);

    logout.addEventListener('click', ()=> {
    const loggedInUsers = JSON.parse(localStorage.getItem('loggedInUsers')) || [];
    loggedInUsers.push({ username: user[0].name, action: "Logout", LogoutTime: new Date().toISOString() });
    
    localStorage.setItem('loggedInUsers', JSON.stringify(loggedInUsers));
    window.location.href = "../index.html";

    const updateStatus = JSON.parse(localStorage.getItem('isLoggedIn')) ;
    localStorage.setItem('isLoggedIn', JSON.stringify({ name: user[0].name, loginStatus: false }));
    
    window.location.href = "../indexFeature1.html";
});
}

