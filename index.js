let num = 0;

const value= document.querySelector(".value")
const btns= document.querySelectorAll(".btn")

btns.forEach((btn)=> {
    btn.addEventListener("click", (event)=> {
        const style = event.currentTarget.classList
        if (style.contains("b1")) {
            num--;
        }
        else if (style.contains("b3")) {
            num++;
        }
        
        else {
            num=0;
        }
        value.textContent=num;
        if (num>0) {
            value.style.color = "#4caf50";
        }
        else if (num<0) {
            value.style.color = "#fa5252";
        }
        else {
            value.style.color = "#ffffff"
        }
    });
})