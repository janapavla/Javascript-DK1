const updateCounter = (number) => {
  const valueElm = document.querySelector('.counter__value'); // hyběla tečka jako výběr podle třídy
  valueElm.innerHTML = String(number).padStart(2, '0'); //typo: numbr // innerHTML místo value
};

let value = 0;
const btnUp = document.querySelector('.counter__up'); // chyběla tečka jako výběr podle třídy
const btnDown = document.querySelector('.counter__down'); // hyběla tečka jako výběr podle třídy

btnUp.addEventListener('click', () => { //Uncaught TypeError: Cannot read properties of null (reading 'addEventListener'), viz vysvětlení na webu, chyba je na ř. 7 v selektoru
  if (value < 99) { //velue
    value = value + 1 //velue
    updateCounter(value); //updateCountr
  }
});

btnDown.addEventListener('click', () => {
  if (value > 0) { //velue
    value = value - 1; //velue
    updateCounter(value); //updateCountr
  }
});

updateCounter(value);