const input = document.getElementById("input-bar");
const list = document.getElementById("list-container");
function addTask() {
    if(input.value==='')
        alert("You must write something!!!");
    else {
        let li=document.createElement('li');
        li.innerText=input.value;
        list.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input.value=''
}
list.addEventListener("click",(e)=>{
    // console.log(e.target);
    // console.log(e.target.parentElement);
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName ==="SPAN"){
        // console.log(e.target.parentElement);
        e.target.parentElement.remove();
    }
});
