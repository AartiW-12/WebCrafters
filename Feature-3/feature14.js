const btn = document.getElementById("fetchPost");
const userId = document.getElementById("userId");
const postTitle = document.getElementById("title");
const postBody = document.getElementById("body");

btn.addEventListener("click", async(e)=>{
    e.preventDefault();
    try {
         const id = getRandomid();
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    console.log(data);
    setTimeout(()=>{
    userId.textContent = `User ID: ${data.userId}`;
    postTitle.textContent = `Title: ${data.title}`;
    postBody.textContent = `Body: ${data.body}`;
    },3000)
    } catch (error) {
        console.log("Error fetching post:", error.message);
        userId.textContent = "Error occured for this userId";
        postTitle.textContent = "Error occured for this userId";
        postBody.textContent = "Error occured for this useId";
    }  

})

function getRandomid(){
return Math.floor(Math.random()*100) +1;
}