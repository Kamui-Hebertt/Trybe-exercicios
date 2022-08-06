const submit = document.querySelector('#subtBtn');
const p = document.querySelector('#recieve');
const inpName =  document.querySelector('#full-name');
const inpEmail = document.querySelector('#email');
const op1 = document.querySelector('#option1');
const op2 =  document.querySelector('#option2');
const op3 = document.querySelector('#option3');

//console.log(submit);

function sub (event) {
 
  p.innerHTML = inpName.value;
  p.innerHTML = inpEmail.value;
  //p.innerHTML = op1.value;
 // p.innerHTML = op2.value;
  //p.innerHTML = op3.value;
  event.preventDefault();



}

submit.addEventListener('click', sub);