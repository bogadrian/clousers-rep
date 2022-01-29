// const extern = () => {
//   const cache = new Map();
//   let tracker = 0;

//   return function recursionFunction(arr, newArr, cb) {
//     tracker++;

//     if (arr.length <= tracker) {
//       return cb(newArr);
//     }
//     if (!cache.has(arr[tracker])) {
//       console.log('calculated');
//       cache.set(arr[tracker], arr[tracker]);
//       newArr = [...newArr, arr[tracker]];
//     } else {
//       console.log('returned from cache');
//       const cachedElement = cache.get(arr[tracker]);
//       newArr = [...newArr, cachedElement];
//     }

//     return recursionFunction(arr, newArr, cb);
//   };
// };

// const weirdArray = [1, 'Rome', true, 34, 1, 'Turin', 1, true, 'Rome', '1'];

// const inner = extern();

// const callback = arr => {
//   console.log('aaaaa', arr);
// };

// const a = [];

// const res = inner(weirdArray, a, callback);
// //console.log(res);

// import { res } from './app1.js';

// setTimeout(() => {
//   console.log('tt', res);
// }, 1000);

// import { inner } from './app1.js';

// const profession1 = 'JavaScript';
// const profession2 = 'TypeScript';
// const profession3 = 'GraphQl';

// const res1 = inner(profession1);

// console.log('res', res1);

//! inner function argument
const professions = ['JavaScript', 'TypeScript', 'GraphQl', 'NodeJs'];

export const middString = () => {
  const randomIndex = Math.floor(Math.random() * (0, 4));
  return professions[randomIndex];
};
