"use strict";
let counter = 0;
const formInput = document.getElementById("form");
formInput === null || formInput === void 0 ? void 0 : formInput.addEventListener("submit", (input) => {
    input.preventDefault();
    let cash = document.getElementById("cash").value;
    let name = document.getElementById("inputName").value;
    let details = document.getElementById("inputDetails")
        .value;
    let amount = document.getElementById("inputAmount").value;
    console.log(`${cash}, ${name}, ${details}, ${amount}`);
    let HTMLElement2 = document.getElementById("biji");
    let createElement = document.createElement("div");
    createElement.id = `baris${counter}`;
    createElement.className = "pembungkus";
    HTMLElement2 === null || HTMLElement2 === void 0 ? void 0 : HTMLElement2.appendChild(createElement);
    let pembungkus = document.querySelector(`#baris${counter}`);
    let newElement = document.createElement("h4");
    newElement.textContent = `${cash}`;
    pembungkus === null || pembungkus === void 0 ? void 0 : pembungkus.appendChild(newElement);
    let newElement2 = document.createElement("p");
    newElement2.textContent = `${name} Telah Melakukan ${details} Sebesar Rp. ${amount}`;
    pembungkus === null || pembungkus === void 0 ? void 0 : pembungkus.appendChild(newElement2);
    counter++;
});
