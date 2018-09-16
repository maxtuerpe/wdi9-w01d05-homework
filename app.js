// // variable = value
// // variable = newValue
// // const/let newVariable = variable
// // declaring is naming a variable. defining is giving a variable value. assigning is updating the value.
// // pseudocoding is writing out what steps you think you need your code to do.
// // 80-90% of time should be spent thnking abou how code should work.

// // let firstVariable = 'Hello World';
// // firstVariable = 4;
// // secondVariable = firstVariable;
// // secondVariable = 'max';
// // // firstVariable is still defined as 4.
// // console.log(`Hello, my name is ${secondVariable}`);

// // const a = 4;
// // const b = 53;
// // const c = 57;
// // const d = 16;
// // const e = 'Kevin';

// // console.log(a < b);
// // console.log(c > d);
// // console.log('Name' === 'Name');
// // console.log(true != false);
// // console.log(false == false == false == false == false == false == true);
// // console.log(false == false)
// // console.log(e === 'Kevin');
// // console.log(a < b < c);
// // console.log(a == a !== d);
// // console.log(48 == '48');


// // let animal = "monkey";
// // if(animal === "cow"){
// //     console.log('moooo')
// // } else {
// //     console.log('Hey! You\'re not a cow.')
// // }

// // let personAge = 16;
// // if(personAge >= 16){
// //     console.log('Here are the keys')
// // } else {
// //     console.log('Sorry, you\'re too young.')
// // }

// // for( let i = 0; i <= 10; i++){
// //     console.log(i);
// // }
// // for( let i = 10; i <= 400; i++){
// //     console.log(i);
// // }
// // for( let i = 12; i < 4000; i++){
// //     if(i%3 === 0){
// //         console.log(i);
// //     }
// // }
// // for( let i = 1; i <= 100; i++){
// //     if(i%2 === 0){
// //         console.log(`this number is even: ${i}`);
// //     }
// // }
// // for( let i = 0; i <= 100; i++){
// //     if(i%5 === 0){
// //         console.log(`i found a ${i}. High Five!`);
// //     } if(i%3 === 0){
// //         console.log(`i found a ${i}. Three is a crowd`);
// //     }    
// // };

// // let bankAccount = 0;
// // for(let i = 1; i <= 10; i++){
// //     bankAccount+= i;
// // }
// // for(let i = 1; i <= 100; i++){
// //     bankAccount+= 2*i;
// // } 
// // console.log(bankAccount);

// // // i've done this already


// // // arrays contain values
// // // they are not necesarrily stored in order
// // // list of names

// // const quotes = [
// //     "Life is what happens when you’re busy making other plans.",
// //     "My life is my message.",
// //     "It is better to be hated for what you are than to be loved for what you are not."
// // ]

// // const randomThings = [1, 10, "Hello", true]

// // // the first element is accessed by randomThings[0].

// // randomThings[2] = "world";
// // console.log(randomThings[2]);


// // const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// // // ourCLass[2];

// // ourClass[4] = "octocat";
// // ourClass.push('Cloud City');



// // const myArray = [5, 10, 500, 20]

// // myArray.push('egon', 'chris');
// // console.log(myArray);

// // myArray.splice(0,1, 'Bob Marley');
// // console.log(myArray);

// // myArray.pop();
// // myArray.reverse();

// // console.log(myArray);


// // let num = 1;

// // if(num< 100){
// //     console.log('little number');
// // } else {
// //     console.log('big number');
// // }
// // if(num< 5){
// //     console.log('little number');
// //     return;
// // } if (num > 10){
// //     console.log('big number');
// //     return;
// // } else {
// //     console.log('monkey');
// // }
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "GA hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
  
//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//   console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");

//   kristynsCloset.splice(6,0,'raybans');

//   console.log(kristynsCloset);

//   kristynsCloset[5]= "stained knit hat";


//   console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][2]} and  ${thomsCloset[2][1]}!`)

// thomsCloset[1][2]= "footie pajamas";

// const printCool = (name) => {
//     console.log(`${name} is cool`);
// }
// const calculateCube = (num) => {
//    console.log(Math.pow(num, 3));
// }
// calculateCube(5);

// const isVowel = (letter) => {
//     if (letter === 'a'||'e'||'i'||'o'||'u'||'A'||'E'||'I'||'O'||'U'){
//         return true;
//    }
//    return false;
// }
// console.log(isVowel('A'));



// const getTwoLengths = (str1, str2) => {
//     const arr = [];
//     arr.push(str1.length);
//     arr.push(str2.length);
//     return arr;
// }

// const getMultipleLengths = (arr) => {
//     const numArr = [];
//     for(let i = 0; i < arr.length; i++){
//         numArr.push(arr[i].length);
//     }
//     return numArr;
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

// const maxOfThree = (num1, num2, num3) => {
//     let largest = num1;
//     if(num2 > largest){
//         largest = num2;
//     } if (num3 > largest){
//         largest = num3;
//     }
//     return largest;
// }
// console.log(maxOfThree(6, 9, 1));

// const printLongestWord = (arr) => {
//     let longestWord= '';
//     let charactercount = 0;
//     for( let i = 0; i < arr.length; i ++){
//         if (arr[i].length > charactercount){
//             longestWord = arr[i];
//             charactercount = arr[i].length;
//         }
//     }
//     return longestWord;
// }
// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

// const transmogrify = (a,b,c) => {
//     return(Math.pow((a*b), c));
// }
// console.log(transmogrify(5, 3, 2));


// const reverseWordOrder = (str) => {
//     let word = '';
//     let arr = [];
//     let wordsReversed = '';
//     for(let i = 0; i < str.length; i++){
//         while(str[i] !== ' ' && i  < str.length){
//             word+=str[i];
//             i++;
//         } 
//         arr.push(word);
//         if(str[i] === ' '){
//             word = '';
//         }   
//     }
//     for( let i = 0; i < arr.length; i++){
//         wordsReversed += (`${arr[arr.length - (i+1)]} `);
//     }
//     return wordsReversed;
// }
// console.log(reverseWordOrder("Ishmael me Call"));
// console.log(reverseWordOrder("I use Lâncome on my comb"));



// const randomIntegerOneAndTen = () => {
//     return Math.ceil(Math.random() * 10);
// }

// const randomIntegerTenAndHundred = () => {
//     return Math.ceil(Math.random() * (90) + 10);
// }
// const random532And13267 = () => {
//     return  Math.random() * (12735) + 532;
// }

// const randomOneAndTen = () => {
//     return  Math.random() * (9) + 1;
// }
// const getRandomElement = (arr) => {
//     return  arr[Math.floor(Math.random() * arr.length)];
// }

// console.log(getRandomElement(['hi', 'my', 'name', 'is', 'max']));

const user = {
    name: 'Creede Elliot',
    email: 'boring@gmail.com',
    age: 19,
    purchased: [],
};
user.email = 'creede@creede.creede';
user.age++;
user.location = "Denver";
user.purchased.push('carbohydrates');
user.purchased.push('peace of mind');
user.purchased.push('Merino jodhpers');
console.log(user.purchased[2]);

user.friend = {
    name: 'big boy',
    email: 'imabigboyg@gmail.com',
    age: 10,
    purchased: [],
    location: 'big land',
};
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push('The One Ring');
user.friend.purchased.push('A Latte');
console.log(user.friend.purchased[1]);


for ( let i = 0; i < user.purchased.length; i++){
    console.log(user.purchased[i]);
};
for ( let i = 0; i < user.friend.purchased.length; i++){
    console.log(user.friend.purchased[i]);
};







console.log(user);
















