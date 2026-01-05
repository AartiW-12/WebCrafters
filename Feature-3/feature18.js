const refreshBtn = document.getElementById("refreshBtn");
const container = document.getElementById("container");



refreshBtn.addEventListener("click",()=>rnderFreshData());
function createContainerForData(data){
    const div = document.createElement("div");
    const userId = document.createElement("p");
    userId.textContent = data.userId;
    const id = document.createElement("p")
    id .textContent = data.id;
    const title = document.createElement("p")
    title.textContent = data.title;
    const body = document.createElement("p");
    body.textContent = data.body;

    div.appendChild(userId);
    div.appendChild(id);
    div.appendChild(title);
    div.appendChild(body);
    container.appendChild(div);
}


function fetchLocalHostData(){
    const data = JSON.parse(localStorage.getItem("myData"))||[];
    console.log("local storage data is ",data);
    data.forEach(element => {
        createContainerForData(element);
    });
}

function rnderFreshData (){
    fetch("https://jsonplaceholder.typicode.com/posts/")
    .then((res)=>res.json())
    .then((data)=>{
       // const myData = JSON.parse(localStorage.getItem("myData"))||[];
       localStorage.removeItem("myData");
        localStorage.setItem("myData",JSON.stringify(data));
        console.log(data);
        fetchLocalHostData();
    })
    .catch((err)=>{
        console.log(err.message)
        container.innerHTML = "";
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `${err.message}`;
        container.appendChild(errorMessage);
    })
}