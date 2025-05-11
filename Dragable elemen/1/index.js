let drag = document.getElementById('dragable-elem');

let initialX = 0,
    initialY = 0;

let moveElement = false;

// Event objects

let events = {
    mouse:{
        down:"mousedown",
        move:"mousemove",
        up:"mouseup"
    },
    touch:{
        down:"touchstart",
        move:"touchmove",
        up:"touchend" 
    }
};

let deviceType = "";

// Detech touch device

const isTouchDevice = () => {
    try{
        // we try to create TouchEvent (it would fail for desktop and throw error)

        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch(e){
        deviceType = "mouse";
        return false;
    }
};

isTouchDevice();

// start (mouse down / touch start)

drag.addEventListener(events [deviceType].down, (e) => {
    e.preventDefault();
    // initial x and y points

    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    // start movement

    moveElement = true;
})
// Move

drag.addEventListener(events[deviceType].move, (e) =>{

    // if movment == true the set top and left to new X and Y while removing any offset

    if(moveElement){
        e.preventDefault();
        let newX = !isTouchDevice() ? e.clientX :e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY :e.touches[0].clientY;

        drag.style.top = drag.offsetTop - (initialY - newY) + "px";
        drag.style.left = drag.offsetLeft - (initialX - newX) + "px";

        initialX = newX;
        initialY = newY;

    }
});

// mouse up /touch end

drag.addEventListener(events[deviceType].up,(stopMovement = (e) =>{
    moveElement = false;
})
);

drag.addEventListener("mouseleave",stopMovement);
drag.addEventListener(events[deviceType].up, (e) => {
    moveElement = false;
});