"use strict";
const formInput = document.getElementById("form");
formInput === null || formInput === void 0 ? void 0 : formInput.addEventListener("submit", (input) => {
    input.preventDefault();
    let cash = document.getElementById("cash").value;
    let name = document.getElementById("inputName").value;
    let details = document.getElementById("inputDetails")
        .value;
    let amount = document.getElementById("inputAmount").value;
    console.log(`${cash}, ${name}, ${details}, ${amount}`);
    let HTMLElement = document.getElementById("biji");
    let newElement = document.createElement("h3");
    newElement.textContent = `${cash}`;
    HTMLElement === null || HTMLElement === void 0 ? void 0 : HTMLElement.appendChild(newElement);
    let newElement2 = document.createElement("h4");
    newElement2.textContent = `${name} Telah Melakukan ${details} Sebesar Rp. ${amount}`;
    HTMLElement === null || HTMLElement === void 0 ? void 0 : HTMLElement.appendChild(newElement2);
});
