const foo1 = () => {
    console.log("I am function foo1")
}
const foo2 = () => {
    console.log("I am function foo2")
}
const foo3 = () => {
    console.log("I am function foo3")
}

const arrOfFunc = [foo1, foo2, foo3];

arrOfFunc.map((item)=> {
    item()
})

//----------------------------------------------------------------------------

alert (myFunction1())
function myFunction1 () {
    console.log("foo")
}

// alert (myFunction2())
// const myFunction2 = () => {
//     console.log("foo")
// }

//----------------------------------------------------------------------------

const obj = {
    key1: function varFun(){console.log("I am a function inside of the object")}
}

obj.key1()