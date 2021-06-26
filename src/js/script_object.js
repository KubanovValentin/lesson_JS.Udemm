// объекты и методы их 
// в JS это ассоциактивные массивы 

" use strict ";

// сoздать объект мы можем через игурные скобки 
// const obj = new Object();
// const options = {
//     name:'test',
//     width:1024,
//     height:1024,
//     // и тогда мы можем внутри включить перебор при помощи услвия
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };
// console.log(options.name);
// -----------
// для того чтобы удалить из обьекта какое либо значение то используем 

// delete options.name;
// console.log(options);
// результат удаление name { width: 1024, height: 1024, colors: { border: 'black', bg: 'red' } }

// ---------------


// чтобы перебрать все свойства обьекта мы исползуем конструкцию for (in) 


// for (let kay in options) {
//     // проверяем на тип обьекта 
//     if (typeof(options[kay]) === 'object'){
//         for (let i in options[kay]) {
//             console.log(`свойство ${i} имеет значение ${options[kay][i]}`);
//         }
//     }else {
//         console.log(`свойство ${kay} имеет значение ${options[kay]}`);
//     }
    
    
// }
// запомнить этот синтаксис надо!!!!

// в будущем будем перебирать обьекты и как то с ними взаимодействовать 

// for (of) с обьектами не будет работать. этот метод не может работать с of тоько с in
/*если попадаеться такой пример 
colors: {
    border: 'black',
    bg: 'red'
} то js не может превратить в строчку и тогда он выводит так свойство colors имеет значение [object Object]
*/

// это один класических небольших патернов которые довольно частенько используються в программах 

// это перебор свойств и ключей обьекта 
// -----------------------------------------------------

// теперь  про функции и методы которые есть в нутри обьекта 
// у обьекта нет свойства leng 

// сейчас узнаем сколько свойств у обьекта с помощью счетчика counter 
// let counter = 0;
// for (let kay in options) {
//     // проверяем на тип обьекта 
//     if (typeof(options[kay]) === 'object'){
//         for (let i in options[kay]) {
//             console.log(`свойство ${i} имеет значение ${options[kay][i]}`);
//             // counter++;
//         }
//     }else {
//         console.log(`свойство ${kay} имеет значение ${options[kay]}`);
//         counter++;
//     }
// }
// console.log(counter);

// и получаем результат 3 хотя должно быть 4 (name,whidth,heidth,color)
// но color обьект и в нутри есть свойства и поэтому надо сделать ниже

// let counter = 0;
// for (let kay in options) {
    
//         counter++;
// }
// console.log(counter);
//  и вот тогда будет 4 свойства 


// -----------------------------------

// переходим к методу keys 

// console.log(Object.keys(options));
// и мы получаем массив со всеми ключами [ 'name', 'width', 'height', 'colors' ] 
// и благодаря такому свойству length и узнать какое количество элементов там содержиться 
// Object.keys(options)-создает массив с ключами и свойство length показывает сколько элементов в этом массиве
// console.log(Object.keys(options).length);
// результат 4 



// -----------------------------------------
// можем создать методы вручную пример 


const options = {
        name:'test',
        width:1024,
        height:1024,
        // и тогда мы можем внутри включить перебор при помощи услвия
        colors: {
            border: 'black',
            bg: 'red'
        },
        // создаем метод 
        makeTest:function() {
            console.log('Test');
        }
    };
    // запускаем - обращаемся к обьекту и включаем ее 
    options.makeTest();

    // console.log(Object.keys(options).length);

    // -------------------
    // приступим к деструтуризации обьектов 
    // и вытаскиваем то что нам надо 
    const {border, bg} = options.colors;
    console.log(border);
    //  результат black нам нужный 