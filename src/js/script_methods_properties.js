" use strict ";
// разберем методы и свойства строк и чисел 
// методы это вспомогательные функции а свойства это вспомогательные значения 
const str = 'test';

console.log(str.length);
// результат будет 4 это кличество букв 
// и это часто используемо длины строки так и других типов данных

const arr = [1, 2, 4];

// console.log(arr.length);

// результат -3 количество элементов внутри  массива 
// прошу обратить внимание когда мы используем свойство length не вызывая его то мы пишем как выше через точку 


// в консоле f12 в console ddjlbv console.dir(numer); 
// и видим как они выглядят внутрибраузера и их свойства


// console.log(arr[2]);
// применили индекс 2 
// результат 4 мы увидели значение 


// используем метод ,и нада использовать () 
// мы выполняем действие над строкой 

// ------------
// метод toLowerCase и toLowerCase 
console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// если вдруг затисалась заглавная или капс буква то этот метод возращат в нижний регистр а исходник не изменяеться
console.log(str);

// дальше метод который позволяет найти кусочек вашей строки и сказать с какой позиции она начинаеться

const fruit = 'Some frut';
// используем метод() должны быть 
// -------------
// метод indexOf 
console.log(fruit.indexOf("frut"));
// используеться восновном для того что бы определить есть ли кусочек кода в этой строке(искомое значение)
// если написать какую нибудь букву которой нет в данном коде то покажет -1 что значит что этого элемента нет 
// аналок условия потому что можем узнать есть ли такой кусочек строки или кода 

const logg = 'hello word';
// с помощью метода slice мы можем вырезать кусок  кода первая цифра начало а вторая конец 
// -----------------
// метод slice 
console.log(logg.slice(6, 10));

// можем использовать только первое значение (logg.slice(6)) и это означает что вырезаться будет до конца 
// можно использовать и -1 значения тогда будет отсчет с конца 
console.log(logg);

console.log(logg.slice(6, 10));


// ---------
// метод substring
// это аналог slice только не использует -1 отр значение 
console.log(logg.substring(6, 10));
// ------------
// команда substr

// сдесь принцип первое число это 6(начало позиции) а второе число сколько символов надо вырезать (4) 
console.log(logg.substr(6, 4));

// ---------------------------------- числа 
// библиотека работы с числами - Math   в консоле можно увидеть пример

const num = 12.2;
// округление числа  редко придеться кроме откругления 
console.log(Math.round(num));

// методы чисел 
// метод parseInt - переводит число в другую систему исчесления  

const test = '12.2px';
console.log(parseInt(test));

// метод parseFloat возращает
console.log(parseFloat(test));