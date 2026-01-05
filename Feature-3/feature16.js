const inputData = document.getElementById('inputAmount');
const btn = document.getElementById('payBtn');
// btn.addEventListener("click",(e)=>{
//     e.preventDefault();
    
// })
inputData.addEventListener("input",()=>{
const amount = inputData.value;
console.log(Number(amount));

    if(Number(amount))
    { console.log("is  a number");
        btn.textContent = "Pay";
    }
    else{
        btn.textContent = "send message";
    }
})



