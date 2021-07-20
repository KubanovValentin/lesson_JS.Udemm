"use strict";

const p = document.querySelector('p');
console.log(p);

// создадим тег скрипт и поместим на страничку 

// const script = document.createElement('script');
// script.src = "test.js";
// чтоб скрипты шли по очереди т.к по умолчанию они ведут как при async надо сделать ниже
// script.async = false;
// document.body.append(script);//это скрипт будет загружаться после выполнения document.body этого условия


//посмотрим на практике 
function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
// чтоб скрипты шли по очереди т.к по умолчанию они ведут как при async надо сделать ниже
    script.async = false;
    document.body.append(script);//это скрипт будет загружаться после выполнения document.body этого условия
}

loadScript("test.js");
loadScript("some.js");