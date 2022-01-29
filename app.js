const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const handleInsert = response => {
  //* only DOM stuff
  const firstString = response.split(' ')[0] + ' ' + response.split(' ')[1];
  const thirdString = response.split(' ')[3];
  const secondString = response.split(' ')[2];

  first.innerHTML = firstString;
  second.innerHTML = secondString;
  third.innerHTML = thirdString;
};

/**
 *
 *
 *
 *
 *
 *
 */

//? variable coming as state from somwhere else
import { middString } from './data1.js';
//? calling th einner function 2 times in clouser.js
import { innerFunction1, innerFunction2 } from './closuers.js';

//? calling the outerFunction with 2 arguments and returning the inner function

const clouser1 = () => {
  /*
   */
  const randomArg = middString();
  //! first clouser response
  const response = innerFunction1(randomArg);
  handleInsert(response);
};

const clouser2 = () => {
  /*
   */
  const randomArg = middString();
  //! second clouser response
  const response = innerFunction2(randomArg);
  handleInsert(response);
};

/**
 *
 *
 *
 *
 *
 */
//* just Dom
btn1.addEventListener('click', clouser1);
btn2.addEventListener('click', clouser2);
