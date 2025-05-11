console.log("This is my script");
let result = {

    "tag": "",
    "free": true,
    "role": false,
    "user": "roshankram2",
    "email": "roshankram2@gmail.com",
    "score": 0.64,
    "state": "deliverable",
    "domain": "gmail.com",
    "reason": "valid_mailbox",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": true,
    "did_you_mean": "",
    "format_valid": true
}
submitbtn.addEventListener("click", async (e) => {
    e.preventDefault()
    console.log("clicked")
    resultCont.innerHTML = ` <img id="loadingimg" src="img/loading.svg" alt="">`
    let email = document.getElementById("Emailid").value
    let key = "ema_live_dJ1AnGdyToGZ5xk0qwWCTHbGEUCLtJzC4XHkwLQ3"
    let url = `https://api.emailvalidation.io/v1/info?apikey=${key}&email=${email}`
    let res = await fetch(url)
    let result = await res.json()
    let str = ``
    for (key of Object.keys(result)) {
        if(result[key]!=="" && result[key]!==" "){
            str = str + `<div>${key}:${result[key]}</div>`
        }
    }
    console.log(str)
    resultCont.innerHTML = str;
})


// **********************************
// Mouse hover section
// **********************************

const trailer = document.getElementById("trailer");


window.onmousemove = e =>{
    const x = e.clientX - trailer.offsetWidth/2,
          y = e.clientY - trailer.offsetHeight/2;

    const keyframes = {
        transform : `translate(${x}px , ${y}px)`
    }      
    trailer.animate(keyframes ,{
        duration:800,
        fill:"forwards"
    });
}

// *****************************
// Dark mode
// *****************************

const toggle = document.getElementById('sun');

toggle.addEventListener('click', function(){
    this.classList.toggle('fa-moon');
    document.body.classList.toggle('dark-theme');
});