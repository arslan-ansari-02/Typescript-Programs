// Program No. 01
// 1. Write a ts program to find maximum between two numbers.
// Enter Tow Numbers:
var num1 = 10;
var num2 = 20;
if (num1 > num2) {
    console.log("num1 is greater than num2");
}
else if (num1 < num2) {
    console.log("num2 is greater than num1");
}
else {
    console.log("both numbers are equal");
}
// Program No. 02
// 1. Write a ts program to find maximum between Three numbers.
// Enter Three Numbers:
var num3 = 10;
var num4 = 20;
var num5 = 30;
if (num3 > num4 && num3 > num5) {
    console.log("num3 is greater both num4 and num5");
}
else if (num4 > num3 && num5 > num5) {
    console.log("num4 is greater both num3 and num5");
}
else if (num5 > num3 && num5 > num2) {
    console.log("num5 is greater both num3 and num4");
}
else {
    console.log("All three numbers are equal");
}
