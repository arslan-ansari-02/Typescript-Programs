// Program No. 01
// 1. Write a ts program to find maximum between two numbers.
// Enter Tow Numbers:
// var num1:number = 10;
// var num2:number = 20;
// if (num1 > num2) {
//     console.log("num1 is greater than num2");
// }
// else if (num1 < num2) {
//     console.log("num2 is greater than num1");
// }
// else{
//     console.log("both numbers are equal");
// }
// Program No. 02
// 1. Write a ts program to find maximum between Three numbers.
// Enter Three Numbers:
var num1 = 10;
var num2 = 20;
var num3 = 30;
if (num1 > num2 && num1 > num3) {
    console.log("num1 is greater both num2 and num3");
}
else if (num2 > num1 && num2 > num3) {
    console.log("num2 is greater both num1 and num3");
}
else if (num3 > num1 && num3 > num2) {
    console.log("num3 is greater both num1 and num2");
}
else {
    console.log("All three numbers are equal");
}
