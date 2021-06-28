'use strict';

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));


console.dir([1, 2, 3]);

const solder = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};


const jonh = Object.create(solder);
// const jonh = {
//     health: 100
// };

// jonh.__promo__ = solder;

// Object.setPrototypeOf(jonh, solder);
jonh.sayHello();

console.log(jonh.armor);

// надо запомнить create и setPrototypeOf 
// __promo__ уже не исползуеться но порой можно встретить в старых проектах