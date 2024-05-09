// // const person1 = {
// //     name: "superman",
// //     gmail: "superman@gmail.com",
// //     age: 330,
// //     salary: 5,
// //     name: "spiderman",
// //     panCard: "QWQGGDGQF!%#%13513",
// //     aadharCard: 1234567,
// //     pincode: 452013,

// // }

// // // const person2 = { ...person1, name:"batman",gmail:"batman@gmial.com"};
// // const person3 = { ...person1, name: "wonderwoman", gmail: "wonderman@gmial.com", phonenumber: 124141419841242 };

// // // console.log("This is the person1 details", person1)
// // // console.log("This is the person2 details", person2);
// // const {age, name, phonenumber, salary} = person3
// // console.log("This is the person3 details", age, phonenumber, salary);

// // const number1 = [10,20,30,40]

// // const number2 = [ ...number1, 50,10,30,43]

// // console.log(number2)

// const car = {
//     brandname: "BMW",
//     Headlight: 2,
//     Wheels: 4,
//     engineType: "petrol",

// }

// const car2 = {...car, brandname:"AUdi", gates: 2, rooftop:"open"}

// const car3 = {...car, brandname:"porche"}

// const {Wheels, gates,brandname} = car2
// console.log(`This is car name ${brandname}\nThis is number of gates ${gates}\nThis is numbers of wheels ${Wheels}`);
// // console.log("Cars 24 have this cars",car2)
// // console.log("Cars 24 have this cars", car3);

//////////////  fuction ////////////////////
// function sum(a,b,c,d){
//     console.log(a,b,c,d)
// }
// sum(10,20,30,40)

// let a = 10;
// let b = 20;

// (10,20) (300,400) (10, 1000) (90, 540) (680, 10)

// function sum(a,b){
//     console.log(`Sum of ${a} and ${b} is ${a+b}`)
// }
// sum(10,20)
// // sum(20, 300);
// // sum(10, 10000);
// // sum(90, 20000);
// // sum(54, 34);
// // sum(30, 60);

// function multiply(a,b){
//     console.log(`Multiplication of ${a} and ${b} is ${a*b}`)
// }
// sum(10,20)

// function divide(a,b){
//     console.log(`Division of ${a} and ${b} is ${a/b}`)
// }

// divide(10,20)

// function substract(a,b){
//     console.log(`Substraction of ${a} and ${b} is ${a-b}`)
// }
// substract(10,20)

// let a = prompt("Enter the first number")

// function sum(a,b){
//     return a+b
// }

// function multiply(a,b){
//     return a*b
// }

// function divide(a,b){
//     return a/b
// }

// function substract(a,b){
//     return a-b
// }

// switch (key) {
//     case sum:
//         console.log(`Sum of ${a} and ${b} is ${a+b}`)

//         break;

//         case multiply:
//             console.log(`Multiplication of ${a} and ${b} is ${a*b}`)
//             break;

//             case substract:
//                 console.log(`Substraction of ${a} and ${b} is ${a-b}`)
//                 break;

//                 case divide:
//                     console.log(`Division of ${a} and ${b} is ${a/b}`)
//                     break;

//     default:
//         console.log("Invalid input")
//         break;
// }

////// fucntion with arguments & with return type //////

// function sum(a,b){
//     console.log(`sum of ${a} and ${b} is ${a+b}`)
//     return a+b;
// }

////// fuction with arguments & without return type //////

// function mul(a,b){
// console.log(`Multiplication of ${a} and ${b} is ${a*b}`)
// }

////// fuction without arguments & with return type //////
// function div(){
//     let a =300;
//     let b = 20;
//     console.log(`division of ${a} and ${b} is ${a/b}`)
//     return a/b;
// }

////// fuction without arguments & without return type //////
// function test(){
//     let a = 300;
//     let b = 20;
//     console.log(`division of ${a} and ${b} is ${a/b}`)
// }

// console.log(sum(20,40))
// const result = sum(20,40)
// console.log(result)

// mul(20,40)

// const resultDivisiion = div()
// console.log(resultDivisiion)

// test()

// const cylinder = () => {
//     const radius = parseInt(prompt("Enter the radius:"));
//     const height = parseInt(prompt("Enter the height:"));

//     const result = 2 *Math.PI* radius*radius + 2*Math.PI*radius*height;

//     console.log(`The calculated area is: ${result}`);
// }
// cylinder();

// const person = {
//     name: 'Superman',
//     age: 30,
//     salary: 'berojgar',
//     phone: '1412414141'
// }

// for(let key in person){
//     console.log( key,person[key])
// }

// const Marvel = {
//     MovieName: 'Infinity War',
//     Hero: 'Ironman',
//     release: 2018,
//     hero: 'Thor',
//     location: 'New York',
//     villain: 'Thanos',
// }

// for(let key in Marvel){
//     console.log(`${key} : ${Marvel[key]}`)
// }

// const arr = [10,20,30,40,50,'superman',70.115135,80,true,100,false]

// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// let i = 0;
// while(i <arr.length){
//     console.log(i, arr[i])
//     i++;
// }

// for(let element of arr){
//     console.log(element)
// }

// arr.forEach((element, index) => {
//     console.log(index, element+20 )
// })

// let List = [1,2,4,11,53,3,2];

// let High = List[0];

// let SH;

// for(let i=0; i<List.length; i++){
//     if(High<List[i]){
//         SH = High;

//         High = List[i]
//     }
//     else if(SH<List[i]){
//         SH = List[i]
//     }

// }

// console.log(SH)

// const arr = [10, 20, 30, 40, 50, 'superman', 70.115135, 80, true, 100, false];
// const firstHalf = arr.slice(0, Math.floor(arr.length / 2));
// const secondHalf = arr.slice(Math.floor(arr.length / 2));

// console.log("First half:", firstHalf);
// console.log("Second half:", secondHalf);

// let arr = [12,23,42,22,54,23,125,3535,12,244,2]

// let M = arr.length%2!=0 ? (arr.length+1)/2 : (arr.length)/2;

// const arr = [10, 20, 30, 40, 50, 'superman', 70.115135, 80, true, 100, false];

// console.log(arr);

// const movies = [
//     {title:'Ra.One', Actor:'SRK', release:'2011',Hit:false, Flop:true},
//     {title:'Dhoom', Actor:'John', release:'2004',Hit:true, Flop:false},
//     {title:'Krrish', Actor:'Hrithik', release:'2006',Hit:true, Flop:false},
//     {title:'Koi Mil Gaya', Actor:'Hrithik', release:'2003',Hit:true, Flop:false},
// ]

// console.log(movies)

// for(let i=0; i<movies.length; i++){
//     console.log(movies[i].title)
// }

// for(let key in movies){
//     console.log(key, movies[key].Actor)
// }

// for(let element of movies){
//     console.log(element)
// }

// movies.forEach((value, index) => {
//     console.log(index, value.Actor)
// })

// let i = 0;
// while(i<movies.length){
//     console.log(movies[i].Actor)
//     i++;
// }

// const products = [
//     {title:'iphone15', price: 100000, color:'black', rating: 4.5},
//     {title:'samsungs23', prince: 50000, color:'white', rating: 4.0},
//     {title:'oneplus10',price: 70000, color:'blue', rating: 4.3},
//     {title:'mi11', price: 30000, color:'black', rating: 4.1},
//     {title:'realme10', price: 20000, color:'black', rating: 4.2},
// ]

// for(let i=0; i<products.length; i++){
//     console.log(products[i].title)
// }

// let i = 0;
// while(i<products.length){
//     console.log(products[i].title)
//     i++;
// }

// for(let key in products){
//     console.log(key, products[key].title)
// }

// for(let element of products){
//     console.log(element)
// }

// products.forEach((value, index) =>{
//     console.log(index, value.title)
// })

// const arr = [10,20,30,60,'superman',80.2113,'spiderman',100,true,false]

// console.log(arr)

// push => add the element at the end of the array
// console.log("before =",arr)
// arr.push("batman")  // [10,20,30,60,'superman',80.2113,'spiderman',100,true,false,'batman']
// console.log("after =",arr)

// pop => remove the element from the end of the array

// console.log("before =",arr)
// arr.pop()  // [10,20,30,60,'superman',80.2113,'spiderman',100,true]
// console.log("after =",arr)

// unshift => add the element at the start of the array

// console.log("before =",arr)
// arr.unshift(2,3,414,"aghajaib")    // [2,3,414,"aghajaib",10,20,30,60,'superman',80.2113,'spiderman',100,true,false]
// console.log("after =",arr)

// shift => remove the element from the start of the array

// console.log("after =",arr)
// arr.shift()
// console.log("after =",arr)  // [20,30,60,'superman',80.2113,'spiderman',100,true,false]
// for(let i = 0; i<arr.length; i++){
//     arr.shift()
//     console.log(arr.length)
// }

// let i = 0;
// while(arr.length != 0){
//     arr.shift()
//     // i++;
//     // console.log(i)
// }
// console.log(arr)
// console.log("before =",arr)  // [20,30,60,'superman',80.2113,'spiderman',100,true,false]

// console.log("before =",arr)
// arr.splice(2, 0, 100, 200, 300)  // [10,20,100,200,300,30,60,'superman',80.2113,'spiderman',100,true,false]

// console.log("before =",arr)
// const result =  arr.slice(4,7)  // [ 'superman', 80.2113, 'spiderman' ]
// console.log("after =",result)

// const salary = [
//     {name: 'superman', salary: 10000},
//     {name: 'spiderman', salary: 20001},
//     {name: 'batman', salary: 30000},
//     {name: 'wonderwoman', salary: 40305},
//     {name: 'ironman', salary: 50000},
//     {name: 'captainamerica', salary: 60007},
//     {name: 'thor', salary: 70000},
//     {name: 'blackwidow', salary: 80009},
//     {name: 'hulk', salary: 90000},

// ]

// let resultentSalary = salary.slice(2,5)
// console.log(resultentSalary)

// let salarySum = 0;
// for(let element of resultentSalary) salarySum += element.salary;
// console.log(salarySum)

// let List = [1,2,4,11,53,3,2];

// let High = List[0];

// let SH;

// for(let i=0; i<List.length; i++){
//     if(High<List[i]){
//         SH = High;

//         High = List[i]
//     }
//     else if(SH<List[i]){
//         SH = List[i]
//     }

// }

// console.log(SH)

// let salaryHighest = salary[0].salary;
// let salarySecondHighest;

// for(let i=0; i<salary.length; i++){
//     if(salaryHighest<salary[i].salary){
//         salarySecondHighest = salaryHighest;
//         salaryHighest = salary[i].salary;
//     }
//     else if(salarySecondHighest<salary[i].salary){
//         salarySecondHighest = salary[i].salary;
//     }
// }
// console.log(salarySecondHighest)

// let evenSalary = []

// for(let element of salary){
//     if(element.salary> 65000 && element.salary < 90000){
//         evenSalary.push(element)
//     }
// }

// console.log(evenSalary)

// function customSlice(arr, start, end) {
//     return arr.slice(start, end);
// }

// let arr = [10,20,30,40,50,60,70,80,90,100]

// const mySlice = (sIndex, eIndex) => {
//     const temp = []
//     for(let i = sIndex; i<eIndex; i++){
//         temp.push(arr[i])
//     }
//     return temp;
// }

// console.log(mySlice(2,5))

// const bollywood = ["PK", "Dangal", "3 Idiots", "Lagaan", "Dil Chahta Hai", "Rang De Basanti", "Taare Zameen Par", "Andaz Apna Apna", "Hera Pheri", "Munna Bhai MBBS", "Golmaal",]

// const southIndian = ["Bahubali", "KGF", "Arjun Reddy", "Pushpa", "Sarkar", "Bigil", "Master", "Saaho", "Vikram Vedha", "Kaithi", "Mersal",]

// const allMovies = bollywood.concat(southIndian) // merge two arrays

// console.log(allMovies)

// allMovies.sort() // sort the array in ascending order

// console.log(allMovies)

// const phone = [ "iphone", "oneplus", "realme", "redmi", "sony xperia","oneplus", "samsung ultra s24"]

// console.log( phone.indexOf("realme")) // find the index of the element

// console.log(phone.lastIndexOf("oneplus"))  // find the last index of the element

// console.log(phone.includes("samsung ultra s24"))  // check the element is present or not

// console.log(phone.sort())  // sort the array in ascending order

// const numbers = [9, 1, 4, 3, 5, 0, 2, 7, 6, 8];

// const number = [94,42,533,33,556,464,3,6464,35,3352]

// console.log(number.sort((a,b)=>a-b))

// const arr = [
//   10, 20, 30, 40, 1, 3, 4, 5, 5, 2, 24, 6, 7, 9, 50, 60, 70, 80, 90, 100,
// ];

// const target = 16;
// let i;
// for( i=0; i<arr.length; i++){
//     if(arr[i] == target){
//         console.log("Element not found",i)
//         break;
//     }
// }
// if(i == arr.length){
//     console.log("Element not found")
// }

// const binarySearch = (arr,target) => {

//     let s = 0;
//     let e = arr.length - 1;
//     let mid;

//     while (s <= e) {
//         if (arr[mid] == target) {
//             return mid;
//         }
//         else if (arr[mid] < target) {
//             s = mid + 1;
//         }
      
//         else {
//             e = mid - 1;
//         }
//         mid = Math.floor((s + e) / 2);
//     }

//     return -1;

// }

// const arr = [10, 20, 500, 600, 750, 1200, 1900, 2400, 5000];
// let target = 502;

// const result = binarySearch(arr,target);

// console.log("Element found at index", result);



// console.log("Middle element is", mid);


// CharAt => return the character at the given index

// const str = "superman";

// To find length of string
// console.log("To find length of string", str.length); // 8

// console.log(str.charAt(2)); // s

// for(let i=0; i<str.length; i++){
//     console.log(str.charAt(i))
// }

// Education => vowels => 5, consonants => 4

// const str = "Education";

// let vowels = [];
// let consonants = [];
// let i =[0];

// for(let i=0; i<str.length; i++){
//     if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u'){
//         console.log( "The vowels are ",str.charAt(i));
//         vowels++;
//     }
//     else{
//         console.log(" The consonents are " ,str.charAt(i));
//         consonants++;
//     }
// }

// console.log("The vowels are", vowels);
// console.log("The consonants are", consonants);

// console.log("The vowels are", vowels);
// console.log("The consonants are", consonants);


// const vowels = (str) => {
//     let vowels = 0;
//     let consonants = 0;
//     for(let i=0; i<str.length; i++){
//         if(str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u'){
//             vowels++;
//         }
//         else{
//             consonants++;
//         }
//     }
//     return {vowels, consonants}
// }

// console.log(vowels("Education"))


// const str = "Superman";

// console.log(str.indexOf("e")) // 1

// const str = "Superman";

// console.log(str.replace('Superman','Grenn'))

// split by

// const str ="The superman is                                       belong from krypton";

// console.log(str.split("              ")) // ["The", "superman", "is", "belong", "from", "krypton"]

const str = "Superman";

console.log(str.slice(1, 4)) // uper


