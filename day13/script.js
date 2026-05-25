// // // // // let name = "puneeths";

// // // // // console.log(name);

// // // // // looping statement

// // // // // let array = [1,2,3,4,5,6,7,8,9,10];

// // // // // for(let i = 0; i <= array.length; i++){
// // // // //     console.log(array[i]);
// // // // // }

// // // // // regular function or named function
// // // // // function start() {
// // // // //   console.log("hii");
// // // // // }

// // // // // start(); // function call

// // // // // anonymous function
// // // // // let end = function () {
// // // // //   console.log("this is end function ");
// // // // // };
// // // // // end();

// // // // // parameter function
// // // // let add = function (a, b) {
// // // //   console.log(a + b);
// // // // };

// // // // // arguments
// // // // add(20, 20);

// // // // return function
// // // let add = function (a, b, c, d) {
// // //   return a+b+c+d
// // // };

// // // console.log(add(10,10,10,10));

// // // // callback function
// // // let sub = function (a, b) {
// // //   return a-b
// // // }

// // // console.log(sub(add(10,10,10,10),10));

// // // create a function on a daily life

// // let wakeup = function () {
// //   console.log("wake up at ");
// // };

// // let freshUp = function () {
// //   console.log("fresh up");
// // };

// // let eatBreakfast = function () {
// //   console.log("eat breakfast");
// // };

// // let study = function () {
// //   console.log("study");
// // };

// // let lunch = function () {
// //   console.log("lunch");
// // };

// // let play = function () {
// //   console.log("play");
// // };

// // let dinner = function () {
// //   // console.log("dinner");
// //   return "dinner";
// // };

// // let sleep = function () {
// //   console.log("sleep");
// // };

// // let Rahul = function () {
// //   wakeup();
// //   freshUp();
// //   eatBreakfast();
// //   study();
// //   lunch();
// //   play();
// //   console.log(dinner());
// //   sleep();
// // };

// //   Rahul()

// // function xyz() {
// //   console.log("hii");
// // }

// // function abc(){
// //     console.log("hii this is abc");
// // }

// (function xyz() {
//   console.log("hii");
// })();

// // abc()
// // abc()

// fullform of dom is document object model

// getElementById
// getElementsByClassName
// getElementsByTagName
// querySelector
// querySelectorAll

// let h1 = document.getElementsByTagName("h1");

// console.log(h1);

// function changetext() {
//   h1[2].innerHTML = "😠😠😠😠😠😠😠😠";
//   h1[1].style.color = "red";
// }

// changetext();



// let h1 = document.getElementsByClassName("h1tag");

let h1 = document.getElementById("h1tag");

console.log(h1)

// console.log(h1[0].innerHTML= "hiii");