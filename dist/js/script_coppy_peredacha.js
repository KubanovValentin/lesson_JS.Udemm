'use strict';
// передача по ссылке или по значению Spread оператор 

let  a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

// const copy = obj; //сылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);
// сдесь мы хотели модифицировать copy и пытались это сделать но получили одинаковое значени 
// т.е мы модифицировали и изначальный obj 
// const copy = obj; эта конструкция у нас не сработала 
// ЗАПОМНИТЬ когда мы работаем с примитивными типами данных типо строками числами логических значений и т.д 
// они передаються по значению (проще говоря a = 5, b = a; - сдесь a просто заменияеться 5 и получаеться b = 5)

// когда мы работаем с обьектами(массивы функции и т.д) и сдесь у нас идет передача данных по ссылке а не по значению 
// поэтому мы работаем не с копией (созданного как бы копию) а с переданными значениями по ссылке 
// т.е мы перешли на изначальный обьект и вносим модификацию и в нее 
// и такое поведение называеться передача по ссылке 


// --------------------------------
// и как же тогда создавать копии обьектов массивов и т.д 

// и самый банальный способ это исползования цикла 
// функция при помощи цикла она создаст новый обьект перебирая старые свойства в обьекте 
function copy(mainObj) {
    let objCopy = {};

    let kay;
    for (kay in mainObj) {
        objCopy[kay] = mainObj[kay];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumers = copy(numbers);
newNumers.a = 10;

// console.log(newNumers);
// console.log(numbers);

// есть глубокие и поверхностные коппии
// эта поверхностная копия



// ________________________________________________

const add = {
    d: 17,
    e:20
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

// ---------------------------------
const oldArray = ['a', 'b', 'c'];
const newArray =  oldArray.slice();

newArray[1] = 'qweqweqwe';

console.log(newArray);
console.log(oldArray);


// ___________________________ 

// оператор разварота Spread 

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'bloger'],
    internet = [...video,...blogs, 'vk', 'facebook'];

console.log(internet) ;


function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 3, 4];

log(...num);

const array = ['a', 'b'];

const newAarray = [...array];

const qwer = {
   one: 1,
   two: 2
};

const newObj = {...qwer};