const clickMe = document.querySelector(".primary");
const reset = document.querySelector(".reset");
const result = document.querySelector(".result");

clickMe.addEventListener("click", askYear);
reset.addEventListener("click", clear);

function askYear() {
    var birthYear = prompt("What is your year of birth?");
    let ageInDays = (2021 - birthYear) * 365;
    const h1 = document.createElement('h1');
    const textResult = document.createTextNode("You are " + ageInDays + " days old!");
    h1.setAttribute('class', 'resultInject');
    h1.appendChild(textResult);
    document.querySelector(".result").appendChild(h1);
    // result.textContent = 
}

function clear() {
    document.querySelector(".resultInject").remove();
    // result.textContent = "";
}