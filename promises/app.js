console.log('\n ------ PROMISES ------ \n');

var promise1 = new Promise((resolve, reject) => (
  setTimeout(resolve, 1000, 'foo')
))
    
promise1.then(val => console.log(val)) //resolved + logs 1 sec after below

console.log(promise1.then(val => val)); //pending