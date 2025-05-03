
const left = document.getElementById("left-side");

let isEnabled = true; // Initially enabled

const handleOnMove = e => {
    if (!isEnabled) return;
    const p = (e.clientX / window.innerWidth) * 100;
    left.style.width = `${p}%`;
};

// Mouse and touch move handlers
document.onmousemove = e => handleOnMove(e);
document.ontouchmove = e => handleOnMove(e.touches[0]);

// Toggle on click
document.addEventListener("click", () => {
    isEnabled = !isEnabled;
});
