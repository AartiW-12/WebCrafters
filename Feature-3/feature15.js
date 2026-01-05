const btn = document.getElementById("parallelApiCall");
const container = document.getElementById("container");

btn.addEventListener("click", (e)=>{
    e.preventDefault();
    const urls = [
        "https://jsonplaceholder.typicode.com/posts/1",
        "https://jsonplaceholder.typicode.com/posts/2", 
        "https://jsonplaceholder.typicode.com/posts/3",
        "https://jsonplaceholder.typicode.com/posts/4",
        "https://jsonplaceholder.typicode.com/posts/5"
    ];
    Promise.all(urls.map(url=>fetchUrl(url)))
});

function fetchUrl(url)
{
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        const div = document.createElement("div");
        div.classList.add("card");
        div.innerHTML=`
        <h3>${data.title}</h3>
        <p>${data.body}</p>
        `;
        container.appendChild(div);
    })
    .catch(error=>{
        console.log("Error fetching data from ", url, error);
    })
    .finally(()=>console.log("parallel fetching done using Promise.all"));
}