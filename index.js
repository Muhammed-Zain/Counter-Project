let num = 0;

const value= document.querySelector(".value")
const btns= document.querySelectorAll(".btn")

btns.forEach((btn)=> {
    btn.addEventListener("click", (event)=> {
        const style = event.currentTarget.classList
        if (style.contains("btn-danger")) {
            num--;
        }
        else if (style.contains("btn-success")) {
            num++;
        }
        
        else {
            num=0;
        }
        value.textContent=num;
        if (num>0) {
            value.style.color = "#006400";
        }
        else if (num<0) {
            value.style.color = "#e52b50";
        }
        else {
            value.style.color = "#808080"
        }
    });
})