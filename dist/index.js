"use strict";
const formInput = document.getElementById("form");
formInput === null || formInput === void 0 ? void 0 : formInput.addEventListener("submit", (input) => {
    input.preventDefault();
    var cash = document.getElementById("cash").value;
    var name = document.getElementById("inputName").value;
    var details = document.getElementById("inputDetails").value;
    var amount = document.getElementById("inputAmount").value;
    console.log(`${cash}, ${name}, ${details}, ${amount}`);
});
