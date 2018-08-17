console.log('\n ------ BIND & THIS ------ \n');

let dog = {
    sound: "woof",
    talk: function(){
        console.log(this.sound);
        
    }
}

dog.talk() // output: woof!
let talkFunction = dog.talk
talkFunction() // undefined!

let boundFunction = talkFunction.bind(dog)
boundFunction() // woof!


function talk(sound) {
    console.log(sound); // bark!
}
talk('bark!')


function talkThis() {
    console.log(this.sound); 
}
talkThis() // undefined

let boromir = {
    speak: talkThis,
    sound: "One does not bind this to this bind to this"
}
boromir.speak() // binds under the hood, inferred.

let talkBoundToBoromir = talkThis.bind(boromir)

talkBoundToBoromir()


///////////////////////////////
///////////////////////////////
///////////////////////////////


function protoTalk(){
    console.log(this);  
    console.log(this.sound);
}


let manimal = {
    protoTalk
}

let catman = {
    sound: 'meow'
}

let cowman = {
    sound: 'moo'
}

prarieDude = {
    howl: function() {
       console.log(this.sound.toUpperCase()+'!!!');
    }
}

Object.setPrototypeOf(catman, manimal)
Object.setPrototypeOf(cowman, manimal)
Object.setPrototypeOf(prarieDude, cowman)
// manimal.protoTalk()
catman.protoTalk()
cowman.protoTalk()
prarieDude.howl()
// protoTalk('frack!')