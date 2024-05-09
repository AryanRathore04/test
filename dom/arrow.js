// function print(){
//     console.log("This is normal fcuntion")
// }
//print()

// const print = () => console.log("This is arrow function")
// print()

// const sum = (a,b) =>{//arrow function with arguments & with return type
// console.log(`Sum of ${a} and ${b} is ${a+b}`)
// a+b;
// }
// sum(2,3)    


// const sub = (a,b) =>a-b //arrow function with arguments & with return type
// console.log(sub(2,3))

// const mul = (a,b) => a*b //arrow function with arguments & with return type
// console.log(mul(2,3))

// const div = (a,b) => a/b //arrow function with arguments & with return type
// console.log(div(2,3))


// let a = 10; 
// let b = 20;

// const test = () => {
//     let a = 100;
//     let b = 200;
//     console.log(a,b)
// }
// test()


// let a = 10, b = 20;
// console.log(a,b)

// const test = () => {a=30, b=40; }
// test(a,b)

console.log(a,b)
const calculateArea = () => {
    const radius = prompt("Enter the radius:");
    const height = prompt("Enter the height:");
    
    // Calculate the area using the formula
    const area = Math.PI * radius * radius + 2 * Math.PI * radius * height;
    
    console.log("The calculated area is:", area);
}

calculateArea();