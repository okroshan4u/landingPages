const container = document.querySelector(".container");

const drag = (e) => {
    container.style.top = e.pageY + "px";
    container.style.left = e.pageX + "px";
}

container.addEventListener("mousedown", () => {
    window.addEventListener("mousemove", drag)
});

window.addEventListener("mouseup", () => {
    window.removeEventListener("mousemove" , drag)
});



//  clock js

// setInterval(()=>{
//     d = new Date();
//     htime = d.getHours();
//     mtime = d.getMinutes();
//     stime = d.getSeconds();
//     hrotation = 30*htime + mtime/2;
//     mrotation = 6*mtime;
//     srotation = 6*stime;
//     hour.style.transform = `rotate(${hrotation}deg)`;
//     minute.style.transform = `rotate(${mrotation}deg)`;
//     second.style.transform = `rotate(${srotation}deg)`;
// }, 1000);

// Initialize the total rotation outside of the interval
let totalSecondRotation = 0;

setInterval(() => {
  const d = new Date();
  const htime = d.getHours();
  const mtime = d.getMinutes();
  const stime = d.getSeconds();
  const hrotation = 30 * htime + mtime / 2;
  const mrotation = 6 * mtime;
//   const srotation = 6 * stime;

  hour.style.transform = `rotate(${hrotation}deg)`;
  minute.style.transform = `rotate(${mrotation}deg)`;

  // Update the total rotation and apply it to the second needle
  totalSecondRotation += 6; // Assuming 6 degrees per second
  second.style.transform = `rotate(${totalSecondRotation}deg)`;
}, 1000);

// Rest of your code...

// document.getElementById("second").style.transform = "rotate(" + secondRotation + ")";

const dayname =  document.getElementById('dayname');
const day4 =  document.getElementById('daynumber');
const weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const d1 = new Date();
let dayname1 = weekday[d1.getDay()];
// let daynumber1 = d1.getDay();
// console.log(daynumber);

const d3 = new Date();
let day5 = d3.getDate();
console.log(day5)

dayname.innerHTML = dayname1; 
day4.innerHTML = day5; 

