//? variable coming as state from somwhere else
import { string1, string2, string3, string4 } from './data2.js';

//! the clouser itself
//? the outer function
const outerFunc = (stringStart, stringEnd) => {
  //* the enclosed lexical scope
  ///
  //* here the "stringStart" and "stringEnd" will be persisted for as long as the returned fuction needs them. basically for how long the browser will be opened on the DOM mounted, because the returned function might be called by the event listened on button click!
  //! the inner function returned from the outer function
  return stringMiddle => stringStart + ' ' + stringMiddle + ' ' + stringEnd;
};

//? calling the outerFunction with 2 arguments and returning the inner function the first time
export const innerFunction1 = outerFunc(string1, string2);

//? calling the outerFunction with 2 arguments and returning the inner function the second time
export const innerFunction2 = outerFunc(string3, string4);

//! see the clouser in dev tools
console.dir(innerFunction1);
