let counter: number = 0;
const formInput = document.getElementById("form");
formInput?.addEventListener("submit", (input) => {
  input.preventDefault();
  let cash = (<HTMLInputElement>document.getElementById("cash")).value;
  console.log(cash)
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
  newElement.textContent = `${cash == 'penambahan dana' ? 'Cash in' : 'Cash out'}`;
  pembungkus?.appendChild(newElement);

  let newElement2 = document.createElement("p");
  newElement2.textContent = `${name} telah melakukan ${cash} untuk ${details} sebesar ${formatRupiah(Number(amount))}`;
  pembungkus?.appendChild(newElement2);
  counter++

  function formatRupiah(number:number) {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 2,
    });
  
    return formatter.format(number);
  }
  
});