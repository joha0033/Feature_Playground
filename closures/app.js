console.log('\n ------ CLOSURES // var VS let ------ \n');


// STRAIGHT UP - both get scope of i
////////////////
// var i is available to function inside the loops function scope
console.log('var and let i is available to inside function = ',i);
for (var i = 0; i<4;i++){

    const func = () => {
        console.log('var',i);
    }

    func()
}

///////////////
// let i is available to the function inside the loops block scope

for (let i = 0; i<4;i++){
    const func = () => {
        console.log('let',i);
    }
    func()
}

////////////////
// WITH SET TIMEOUT - i changes for var, while let keeps tabs on 'each' i instance
////////////////
// var i is available to function inside the loops function scope




const varFunc = () => {
    console.log('\n var is over written each loop through \n');
    for (var i = 0; i<4;i++){
        setTimeout(() => {
            console.log(`var ${i}`);
        },  1000)
    } // result 4 4 4 4
}

const letFunc = () => {
    
    for (let i = 0; i<4;i++){
        setTimeout(() => {
            console.log(`let ${i}`);
        }, 1000)
    } // result 0 1 2 3 
    return console.log('\n let has saved versions of itself \n');
}

let demoPromise = new Promise((resolve, reject) => {
    return resolve(varFunc())
})

demoPromise.then(letFunc)






///////////////
// let i is available to the function inside the loops 'block' scope
// the values are kept in a closure







