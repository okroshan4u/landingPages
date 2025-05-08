
BASE_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_KICscgEIvlLooCvN5o7kYTLUVonQ8L2pTxoN4L4H";


const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btn");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

for (let select of dropdowns) {
    for (Currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = Currcode;
        newOption.value = Currcode;
        if (select.name === "from" && Currcode === "USD") {
            newOption.selected = "selected"
        } else if (select.name === "to" && Currcode === "INR") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let Currcode = element.value;
    let Countrycode = countryList[Currcode];
    let newSrc = `https://flagsapi.com/${Countrycode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    // console.log(evt);
    let amt = document.querySelector(".amount input");
    let amtVal = amt.value;
    // console.log(amtVal);
    if (amtVal === "" || amtVal < 1) {
        amtVal = 1;
        amt.value = "1";
    }
    let url = `https://v6.exchangerate-api.com/v6/574943221e105857014eab7e/latest/${fromCurr.value}`;

    fetch(url).then(response => response.json()).then(result =>{
        let exchangerate = result.conversion_rates[toCurr.value];
        let totalexahngeRate = (amtVal * exchangerate).toFixed(2);
        let exchangerateTxt = document.querySelector(".msg");
        exchangerateTxt.innerText = `${amtVal} ${fromCurr.value} = ${totalexahngeRate} ${toCurr.value}`;
    }).catch(()=>{
        exchangerateTxt.innerText = "something went wrong";
    })
});
