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
// 2. Write a ts program to find maximum between Three numbers.
// Enter Three Numbers:

// var num3:number = 10
// var num4:number = 20
// var num5:number = 30

// if (num3>num4 && num3>num5) {
//     console.log("num3 is greater both num4 and num5");
// }
// else if (num4>num3 && num5>num5){
//     console.log("num4 is greater both num3 and num5");
// }
// else if (num5>num3 && num5>num2){
//     console.log("num5 is greater both num3 and num4");
// }
// else{
//     console.log("All three numbers are equal");
// }

// Program No. 03
// 3. Write a ts program to check whether a number is negative, positive or zero.

// var num6:number = 1

// if (num6 < 0) {
//     console.log("num6 is Negative");
// }
// else if (num6 > 0) {
//     console.log("num6 is Positive");
// }
// else{
//     console.log("num6 is zero");
// }

// Program Node. 04
// 4. Write a ts program to check whether a number is divisible by 5 and 11 or not.

// var numSet = 110;

// if (numSet % 5 == 0 && numSet % 11 == 0) {
//     console.log("the enter number is divisible by 5 and 11", numSet);
// }
// else if (numSet % 5 == 0) {
//     console.log("this number only divisible on 5");
// }
// else if (numSet % 11 == 0) {
//     console.log("this number only divisible on 11");
// }
// else {
//     console.log("this number is not divisibl on them");
// }

// Program No. 5
// 5. Write a ts program to check whether a number is even or odd.

// var num:any = prompt("Enter a number")
// var tempNum:number = parseInt(num) % 2;

// if (tempNum == 0) {
//     console.log("num is even");
// }
// else {
//     console.log("num is odd");
// }

// Program No. 06
// 6. Write a ts program to check whether a year is leap year or not.

// var y:any = prompt("Enter your year");
// var year:number = parseInt(y);

// if (year % 4 == 0) {
//     console.log("your enters year is leap year");
// }
// else {
//     console.log("your enters year is not leap year");
// }

// Program No. 07
// 7. Write a ts program to check whether a character is alphabet or not.

// var x: any = prompt("enter your number")
// if((64<x && x<91)||(96<x && x<123)) {
//     console.log("this is an alphabet",x)
//     }
// else {
//     console.log("this is not na alphabet")
// }

// Program No.08
// 8. Write a ts program to input any alphabet and check whether it is vowel or consonant.

// var alpha : any =prompt("enter your alphabet");
// switch(alpha)
// {
//     case 'a':{
//         console.log("this character is vowel a");
//         break;
//     }
//     case 'e':{
//         console.log("this character is vowel e");
//         break;
//     }
//     case 'i':{
//         console.log("this character is vowel i");
//         break;
//     }
//     case 'o':{
//        console.log("this character is vowel o");
//        break;
//     }
//     case 'u':{
//         console.log("this character is vowel u");
//         break;
//     }
//     case 'w':{
//            console.log("this character is vowel w");
//            break;
//     }
//     case 'y':{
//         console.log("this character is vowel y");
//         break;
//     }
//     default:{
//         console.log("this character is not an vowel",alpha)
//     }
//  }

// Program No. 09
// 9. Write a ts program to input any character and check whether it is alphabet, digit or special character.

// var alpha : any =prompt("enter a single char number or special char")
// if((alpha >= 'a' && alpha <= 'z') || (alpha  >= 'A' && alpha <= 'Z')) {
//     console.log("this is an alphabet",alpha)
// }
// else if (alpha >= '0' && alpha <= '9') {
//     console.log("this a number ",alpha)
// }
// else{
//     console.log("it is a special character")
// }




// Program No. 09
// 10. Write a ts program to check whether a character is uppercase or lowercase alphabet.
// var alpha : any = prompt("enter a alphabet ")
// if(alpha >='a' && alpha <='z') {
//     console.log("your value is lowercase alphabet")
// }
// else if(alpha >='A' && alpha <='Z') {
//     console.log("your enter value is uppercase alphabet")
// }


// Program No. 09
// 11. Write a ts program to input week number and print week day.
var num:any=prompt("enter your day nuber")
switch(num){
    case '1':{
        console.log("monday is first day of weak");
           break;
    }
    case '2':{
        console.log("tuesday is second day of weak");
           break;
    }
    case '3':{
        console.log("wednasday  is third day of weak");
           break;
    }
    case '4':{
        console.log("thrusday is fourth day of weak");
           break;
    }
    case '5':{
        console.log("friday is fifth day of weak");
           break;
    }
    case '6':{
        console.log("stuerday is sixth day of weak");
           break;
    }
    case '7':{
        console.log("sunday is seventh day fo weak");
           break;
    }
    default:{
         console.log("only 1 to 7 days in a weak your enter number=",num);
    }
}

// Program No. 09
// 12. Write a ts program to input month number and print number of days in that month.
var num : any =prompt("enter your month number");
if(num ==1 || num ==3 ||num ==5 ||num ==7  ||num ==8 ||num ==10 ||num ==12) {
    console.log("your enter month have 31 days");
}
else if(num ==4 || num ==6 || num ==9 || num ==11) {
    console.log("your enter month have 30 days");
}
else if(num == 2) {
    console.log("your enter month feb it have 28 day")
}
else{
    console.log("your enter num is greater then 12!")
}


// Program No. 09
// 13. Write a ts program to count total number of notes in given amount.
var inAmount : any = prompt("enter amount");
var amount : number = parseInt(inAmount);
var note500, note100, note50, note20, note10, note5, note2, note1 :number;
    if(amount >= 500)
    {
        note500 = amount/500;
        amount -= note500 * 500;
    }
    if(amount >= 100)
    {
        note100 = amount/100;
        amount -= note100 * 100;
    }
    if(amount >= 50)
    {
        note50 = amount/50;
        amount -= note50 * 50;
    }
    if(amount >= 20)
    {
        note20 = amount/20;
        amount -= note20 * 20;
    }
    if(amount >= 10)
    {
        note10 = amount/10;
        amount -= note10 * 10;
    }
    if(amount >= 5)
    {
        note5 = amount/5;
        amount -= note5 * 5;
    }
    if(amount >= 2)
    {
        note2 = amount /2;
        amount -= note2 * 2;
    }
    if(amount >= 1)
    {
        note1 = amount;
    }
    console.log("Total number of notes =");
    console.log("500 =", note500);
    console.log("100 =", note100);
    console.log("50 = ", note50);
    console.log("20 = ", note20);
    console.log("10 = ", note10);
    console.log("5 = ", note5);
    console.log("2 = ", note2);




     // 14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.
// var a1 : any =prompt("enter fisrt angle of triangle");
// var an1 : number= parseInt(a1);
// var a2 : any =prompt("enter second angle of triangle");
// var an2 :number =parseInt(a2);
// var a3 : any =prompt("enter third angle of triangle");
// var an3 : number=parseInt(a3)
// var sum : number= an1 + an2 + an3;
// if( sum==180){
//      console.log("this is acually a triangle couse angle sum is 180")
// }else{
//      console.log("the angle sum is not 180 so it is not triangle")
// }





     // 15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.
// var num : any = prompt("enter number of side of the shap")
// var side : number = parseInt(num);
// if(side==3){
//      console.log("it's a triangle couse have three sides")
// }else{
//      console.log("it's not a triangle couse triangle have three side  ")
// }




     // 16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.
// var a1 : any =prompt("enter fisrt angle of triangle");
// var an1 : number= parseInt(a1);
// var a2 : any =prompt("enter second angle of triangle");
// var an2 :number =parseInt(a2);
// var a3 : any =prompt("enter third angle of triangle");
// var an3 : number=parseInt(a3)
// var an1 : number= parseInt(a1);
// var a2 : any =prompt("enter second angle of triangle");
// var an2 :number =parseInt(a2);
// var a3 : any =prompt("enter third angle of triangle");
// var an3 : number=parseInt(a3);
// if(an1==an2 || an1==an3 || an2==an3){
//      console.log("it is a isosceles triangle")
// }else if(an1==an2 && an1==an3 ){
//      console.log("it is a equilater triangle")
// }else{
//      console.log("it is a scalene trianglee")
// } 
