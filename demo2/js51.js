/**
 * OBJECT
 *
 */

let object = {
  name: " Nguyen Van Minh Huy",
  age: "20",
  gioiTinh: true,
};

// Goi key
console.log(object["name"]);

// Them
object.job = "sv";
//Thay doi
object.tuoi = 20;

// Tim hieu object methods

// Gan function cho object
object.study = function () {
  study;
};

object.study();

/**
 *  ARRAY
 * Dung de luu cac gia tri cung kieu du lieu,
 * Gom co index va value
 * Cac index trong array cach nhau bang dau phay
 */

// Cach tao mang

const array = [1, 2, 3];
const array2 = new Array();

for (let i = 0; i < array.length; i++) {
  array[i]; // tra ve gia tri cua mang tai vi tri i
}

const arr = ["a", "2", "3"];

console.log(array["a"]);

/**
 * Array Mekthods
 * For Each
 * map
 * filter
 * ...
 */

// Thu array.loop

// Array 2 chieu
const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
];

arr2[0][1]; // 2

//

const date = new Date();

/**
 * DOM
 *
 */

// innerHTML , innerText, textContent

// BTVN setTimeOut setInterval

// tao 5 cai div hinh tron class background la purple viet js
// document bind
// document.querySelector = $
// document.querySelectorAll = $$

/**
 * PROMISE
 *
 */
const getData = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Inset timeout");
    resolve("Return data");
    reject("Erro here");
  });
});

// getData.then((item) => {
//   console.log(item);
// }).catch((item) => {
//   console.log(item);
// })

// Async function

async function test() {
  let data = await getData;
  console.log(data);
}

test(); // Return data

async function fetchDataJSON() {
  const data = await fetch("https://fakestoreapi.com/products");
  const data2 = await data.json();
  return data2;
}

fetchDataJSON().then((data2) => {
  console.log(data2);
});

// function sort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i -1; j++) {
//       if (arr[j + 1] < arr[j]) {
//         [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]];
//       }
//     }
//   };
//   return arr;
// }

// console.log(sort([5, 7, 10, 4, 6, 9]));

arr = [5, 7, 10, 4, 6, 9];

function sort(arr, func) {
  // Outer pass
  for (let i = 0; i < arr.length; i++) {
    //Inner pass
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (func(arr[j + 1], arr[j])) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

function compare(a, b) {
  return a < b;
}

console.log(sort(arr, compare));
