const clock = document.querySelector('.clock');

    const drag = (e) => {
        clock.style.top = e.pageY + "px";
        clock.style.left = e.pageX + "px";
    }
    
    
    clock.addEventListener("mousedown", () => {
        window.addEventListener("mousemove" , drag)
    })
    
    clock.addEventListener("mouseup",()=>{
        window.removeEventListener("mousemove", drag)
    });