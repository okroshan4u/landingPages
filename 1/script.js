const slides = document.querySelectorAll(".slide")
const prev = document.querySelector(".btn1")
const next = document.querySelector(".btn2")
console.log(slides)

let counter = 0;

// slides.forEach((slide,index)=>{
//     slide.style.left = `${index * 100}%`
// })

// const goprev = ()=>{
//     counter--
//     if(counter < 0){
//         counter = slides.length-1
//     }
//     slideImage()
// }
// const gonext = ()=>{
//     counter++
//     if(counter > slides.length){
//         counter = 0;
//     }
//     slideImage()
// }

// const slideImage = () =>{
//     slides.forEach(
//         (slide)=>{
//             slide.style.transform = `translateX(-${counter * 100}%)`
//         }
//     )
// }

// or this code

next.addEventListener('click',slideNext);

function slideNext(){
    slides[counter].style.animation =  'next1 0.7s ease-in forwards';
    if(counter >= slides.length -1){
        counter = 0
    }
    else{
        counter++;
    }
    slides[counter].style.animation = 'next2 0.7s ease-in forwards'
}


prev.addEventListener('click',slideprev);
function slideprev(){
    slides[counter].style.animation =  'prev1 0.7s ease-in forwards';
    if(counter == 0){
        counter = slides.length -1
    }
    else{
        counter--;
    }
    slides[counter].style.animation = 'prev2 0.7s ease-in forwards'
}


