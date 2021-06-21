" use strict ";
// const obj = {
//     name: "John",
//     age : 25,
//     isMarried: false
// };

// console.log(obj.age);
// console.log(obj["age"]);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];

// console.log(arr[2]);


// alert('hello!');

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?","");
// console.log(typeof(answer));

// const answer = +prompt("Вам есть 18?","");
// console.log(typeof(answer));

// const answers = [];
// answers[0] = prompt('как ваше имя?', '');
// answers[1] = prompt('как ваша  фамилия?', '');
// answers[2] = prompt('сколько вам лет?', '');
// document.write(answers);

// const user = "valek";
// alert(`Привет,${user}`);

// console.log('arr'+'-object');
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// ++incr;
// --decr; 

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2*4 == 8);// сравнение
// console.log(2*4 == '8');// сравнение значения
// console.log(2*4 === '8');// строгое сравнение false 'это строка'
// console.log(2*4 === 8);// true

// const isChecked = true,
//     isClose = true;

//     console.log(isChecked && isClose);

// -------------------------------------------------------------------------
// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
// переменную и окно(промпт)
// ставим плюсик перед промпт т.к будет число

// --------------------------------------------------------------------------------------

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


// const personalMovieDB = {
    // создаем новое свойство которое в задании и в него помещаем значение переменной первого вопроса
    // count: numberOfFilms,

    // записать свойтво movies которое пока будет пустым оьектом( фигурные скобки{} это обьект)
    // movies: {},

    // так же будет пустой обьект
    // actors: {},

    // дальше по заданию надо в genres поместить пустой массив
    // genres: [],

//     privat: false
// };


// ---------------------------------------------------------------
// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }
// movie.as
// movie[as]
// Проверить, чтобы все работало без ошибок в консоли */


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};