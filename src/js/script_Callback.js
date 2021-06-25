'use strict';

// var drawCats = function (howManyTimes) {
//     for (var i = 0; i < howManyTimes; i++) {
//         console.log(i + " =^.^=");
//         }
//     };
//     drawCats(10);

// Callback- функции 
// это функция которая должна быть выполненна после того как другая функция завершила  свое выполнение 

function first() {
    // что то делать 
    setTimeout(function() {
        console.log(1);
    },500);
}

function second() {
    console.log(2);
}

first();
second();


function learnJS(lang, callback) {
    console.log(`я учу: ${lang}`);
    callback();
}


function done() {
    console.log('я прошел этот урок!');
}

learnJS('JavaScript', done);

