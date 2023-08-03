const formInput = document.getElementById("form");
formInput?.addEventListener("submit", (input) => {
  input.preventDefault();
  let cash = (<HTMLInputElement>document.getElementById("cash")).value;
  let name = (<HTMLInputElement>document.getElementById("inputName")).value;
  let details = (<HTMLInputElement>document.getElementById("inputDetails"))
    .value;
  let amount = (<HTMLInputElement>document.getElementById("inputAmount")).value;
  console.log(`${cash}, ${name}, ${details}, ${amount}`);

  let HTMLElement = document.getElementById("biji");
  let newElement = document.createElement("h3");
  newElement.textContent = `${cash}`;
  HTMLElement?.appendChild(newElement);

  let newElement2 = document.createElement("h4");
  newElement2.textContent = `${name} Telah Melakukan ${details} Sebesar Rp. ${amount}`;
  HTMLElement?.appendChild(newElement2);
});
