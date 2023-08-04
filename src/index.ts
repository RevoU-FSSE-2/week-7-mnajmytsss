let counter: number = 0;
const formInput = document.getElementById("form");
formInput?.addEventListener("submit", (input) => {
  input.preventDefault();
  let cash = (<HTMLInputElement>document.getElementById("cash")).value;
  let name = (<HTMLInputElement>document.getElementById("inputName")).value;
  let details = (<HTMLInputElement>document.getElementById("inputDetails"))
    .value;
  let amount = (<HTMLInputElement>document.getElementById("inputAmount")).value;
  console.log(`${cash}, ${name}, ${details}, ${amount}`);

  let HTMLElement2 = document.getElementById("biji");

  let createElement = document.createElement("div")
  createElement.id = `baris${counter}`
  createElement.className = "pembungkus"
  HTMLElement2?.appendChild(createElement)
  
  let pembungkus = document.querySelector(`#baris${counter}`);

  let newElement = document.createElement("h4");
  newElement.textContent = `${cash}`;
  pembungkus?.appendChild(newElement);

  let newElement2 = document.createElement("p");
  newElement2.textContent = `${name} Telah Melakukan ${details} Sebesar Rp. ${amount}`;
  pembungkus?.appendChild(newElement2);
  counter++

  
});