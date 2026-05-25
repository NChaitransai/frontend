// // // // //  var =  we can redeclare , reassign
// // // // // let = we can reassign but not redeclare
// // // // // const  = we can not reassign or redeclare the value should be assigned at the time of declaration

// // // // // data type
// // // // // 1. number
// // // // // 2. string
// // // // // 3. boolean
// // // // // 4. null
// // // // // 5. undefined
// // // // // 6. object
// // // // // 7. array

// // // // console.log(name)

// // // // let name = "puneeths"

// // // // regular function
// // // // syntax
// // // // function name(){
// // // // // function body
// // // // }
// // // // function call

// // // // anonymous function
// // // // let name = function(){
// // // // // function body
// // // // }
// // // // function call

// // // // parameter function
// // // // let name = function(a,b){
// // // // // function body
// // // // }
// // // // function call

// // // // let name = function(a,b){
// // // //     console.log(a+b);
// // // // }
// // // // function call with argument
// // // // name(2,3)

// // // // callback function
// // // // let f1 = function(a,b){
// // // //     console.log(a+b);
// // // // }
// // // // let f2=function (a,b){

// // // // }

// // // // f2(2,f1)

// // // // Higher order function

// // // function sum() {
// // //   console.log(2 + 3);
// // // }

// // // let f1 = function () {
// // //   return sum()
// // // };

// // // f1()
// // // // console.log(f1());
// // // let num = 0;

// // let outer = function () {
// //   console.log("outer current value", num);

// //   let inner = function () {
// //     let num = 0;

// //     num++;
// //   };

// //     inner();

// //     console.log("after innerfunction value is",num);
// // };

// // outer();
// // outer();

// // (function () {
// //   let num = 0;
// //   console.log(num);
// //   num++;
// //   console.log(num);
// // })();

// let num1 = function () {
//   console.log("this is num1");
// };
// num1()
// let num2 = () => {
//   console.log("this is num2");
// };

// num2()