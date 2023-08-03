const formInput = document.getElementById("form");
formInput?.addEventListener("submit", (input) => {
    input.preventDefault();
    var cash = (<HTMLInputElement>document.getElementById("cash")).value;
    var name = (<HTMLInputElement>document.getElementById("inputName")).value;
    var details = (<HTMLInputElement>document.getElementById("inputDetails")).value;
    var amount = (<HTMLInputElement>document.getElementById("inputAmount")).value;
    console.log(`${cash}, ${name}, ${details}, ${amount}`)
}) 



