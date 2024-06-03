document.querySelector("h1").style.letterSpacing="2px";
document.querySelector("h1").style.color="white";

document.addEventListener("DOMContentLoaded",()=>{
    const  item3=document.querySelector(".item3");
    const forms=document.forms;
    const addform=forms["input-form"];
    console.log(addform);
 //deleting a todo
    item3.addEventListener("click",(e)=>{
        if(
            e.target.classList.contains("cross") 
            //  e.target.parentElement.classList.contains("cross") 
        ){
            const div=e.target.closest(".item3");
            div.parentNode.removeChild(div);
        }
    });
    addform.addEventListener("Submit",(e)=>{
        e.preventDefault();
        const value=addform.querySelector('input[type="text"]').value;
        const html=`
        <div class="item2">
            <div class="item3">
                <input type="radio">
                <p>Complete online javascript course</li>
                <p class="cross"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg></p>
            </div>
        </div>`;
        item2.innerHTML+=html;
        addform.reset();
    });
});
