// in Node.js, the "process.argv" property 
// is an array that contains the command line arguments passed 
// when executing the script

//---------------------------------------------------------------------------

// Get the command line arguments
const args = process.argv.slice(2);

const [arg1, arg2, arg3] = process.argv.slice(2);  // array destructuring
// const arg1 = args[0];
// const arg2 = args[1];
// const arg3 = args[2];

console.log(args)
console.log(process.argv)

// Convert the arguments to numbers
const num1 = Number(arg1);
const num2 = Number(arg2);
const num3 = Number(arg3);

const average = (num1 + num2 + num3) / 3;

if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
    console.log(`the average is ${average}`);
}else if(args.length === 0){
    console.log('Please provide the arguments.')
}
else {
    console.log('Oops! The type of all arguments should be number.')
}




