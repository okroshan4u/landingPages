const btns = document.querySelectorAll('.btn');

btns.forEach((btn) =>{
    const drag = (e) => {
        btn.style.top = e.pageY + "px";
        btn.style.left = e.pageX + "px";
    }
    
    
    btn.addEventListener("mousedown", () => {
        window.addEventListener("mousemove" , drag)
    })
    
    window.addEventListener("mouseup",()=>{
        window.removeEventListener("mousemove", drag)
    });
})

