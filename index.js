/*
! variable Section 
var => Variable;
var => Redeclare Systemical;
var => Re-Assign;
{} block Scope Sign
var => Global Scope;
var => Hosted;
*javascript a undefined mane amon je aikhane ki ace se seita bujhte partese nah;
* javascript a null mane amon ta je aikhane kono kicu nai akdom khali;
*/
// Variable Part Example;
var a =20;
var a =10;  // Redeclare Part
a='Bangladesh'; // Reassign Part
{
    var blocked ='30';
    console.log(a);
    //console.log(blocked);
}
     console.log(blocked);


     // Variable Hoisted Part;
     console.log(country);
     var country="India";


// javascript Variables Part;
let fruits="Orange";
console.log(`This is ${fruits} Fruits, This is ${fruits} Fruits`);

/*
! let Section 
let => Let variable Redeclare Kora Jabe Nah;
*let => Block er vitore a thakle bahire variable er Access Pawa possible 
*let => Block er Vitore Variable Thakle Jodi Bahir theke console ba output declare dei se khetre kintu kaj korbe nah
?let => Let Hosse Block Scooped
*Variable Ta Block Scope Er Moddhe Thakle kaj korbe na let variable er khetre
let => Hosted Nah;
*/

let b=10;
//let b=12;  // Redeclare Korar Try 
b=15; // Let variable Ta Redeclare Kora Jai;
console.log(b);

// *let Scoope Check
// ?Let Ai Scooped Ta kaj Korbe 
let c=12;
{
    console.log(c);
}

// * Let er Ai Scooped Ta Error Ashbe
// {
//     let d=18;
// }
// console.log(d);

/*
!Const Variable Section
const => Const Variable Redeclare Kora Jabe Nah
*const => Const Variable Reassign Kora Jabe Nah
?const => Ai Variable Ta O Hosted Na
*/

const C=40;
//const C=50; // constant Variable Redeclare 
// C=60;
console.log(40);

// *Block Scope Cheack Part

// ? Const Variable a Ai Block Scope Tai Kaj Korbe 
{
    const f=80;
    console.log(f);
}

// ?Const Variable a Ai Block Scope Ta Ar Kaj Korbe Nah
// {
//     const g=70;
// }
// console.log(g);

const person ={
    firstName :"Rakib",
    age : 30
};
person.country ='Bangladesh';
person.age =45;
console.log(person);

/*=================================================> Javascript Variable <======================================*/
/*
! Javascript A Variable Nei Sadharonoto Kono Akta Jinish Store Korar Jonno Ba Kono Akta Jinish Saved Korte Variable Ta Use Kore Thaki.

*/




