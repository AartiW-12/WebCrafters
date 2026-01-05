const adminDiv= document.getElementById('admin-div');

const data = JSON.parse(localStorage.getItem('loggedInUsers')) || [];
console.log(data)


data.forEach((item) => {
    let childDiv = document.createElement('div');
    let loginTime = document.createElement('p');
    let logoutTime = document.createElement('p');
    let username = document.createElement('p');
    let action = document.createElement('p');

    username.textContent = `Username: ${item.username}`;
    action.textContent = `Action: ${item.action}`;
    loginTime.textContent = `Login Time: ${item.loginTime ? new Date(item.loginTime).toLocaleString() : 'N/A'}`;
    logoutTime.textContent = `Logout Time: ${item.LogoutTime ? new Date(item.LogoutTime).toLocaleString() : 'N/A'}`;

    childDiv.appendChild(username);
    childDiv.appendChild(action);
    childDiv.appendChild(loginTime);
    childDiv.appendChild(logoutTime);

    adminDiv.appendChild(childDiv);
})
