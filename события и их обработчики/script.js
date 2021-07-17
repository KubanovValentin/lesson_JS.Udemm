" use strict ";
//у нас всего три способа назначить обработчика событий
// ---------------------1
//1способ назначения событий. передача в html код событие с приставкой onclick
//пример <button onclick="alert('click')" id="btn">Нажми меня</button>
//в реальных проектах не используеться и крайне не стоит так делать (маленькие скрипты либо тест сайты)

// ----------------------2
//2 способ использовать свойства DOM дерева для событий
//сначало надо какой то элемент на который мы вешаем обработчик событий

// const btn = document.querySelector('button');
// затем используем свойство DOM дерева > записываем значение 
//в function будет содержаться какой то код который выполниться после клика
// btn.onclick = function () {
//     alert('clik');
// };

// btn.onclick = function () {
//     alert('second clik');
// };
//в реальных проектах такой код тоже не используеться 
//проблема может быть в повторении const btn и тогда будет заменять первое. это ломает код.
//если мы пишем такой синтаксис то мы его не сможем удалить или затереть

// --------------------------3
// 3 способ с помощью addEventListener и removeEventListener
//сейчас разберем синтаксис 
// в переводе JavaScript будет следить за этим элементом и если произошло событие то тогда он запустит обработчик 
//передаем название нашего события 1 аргумент-('click') а 2 аргументом передаем колбек функцию которая
//и будет нашим обработчиком
//сдесь сначала выполняеться 'click' а затем уже функция () =>
//преимущество этого что на одно действие можно назначать несколько событий

// btn.addEventListener('click', () => {
//     alert('clik');
// });

// btn.addEventListener('click', () => {
//     alert('clik swerdf');
// });
// для того чтобы узнать что за событие или какие действия у нас есть обьект события это event
// и он передаеться как аргумент в колбек функцию (event либо e )
// и если надо дальше передать свои аргументы то просто пишем через запятую
// btn.addEventListener('mouseenter', (event) => {
//     console.log(event.target);
//     event.target.style.color = 'red';
//     event.target.style.display = 'flex';
//     event.target.style. borderRadius = '100%';
//     // console.log('ok');
//     // btn.style.color = 'red';
// });

// const deliteElement = (event) => {
//     // event.target.remove(); это удаление 
//     event.target.style.display = 'flex';
// };

// btn.addEventListener('click', deliteElement);

// btn.removeEventListener('click', deliteElement);// удаляет обработчик событий
// console.log(event.target);
// это в переводе после как выполниться 'click' а после deliteElement(мы ссылаемся на функцию)



// и видим что первое событие не потерялось и работает и принципы выполнения- по очереди 

// let i = 0;
// const deliteElement = (event) => {
//     console.log(event.target);
//     // event.target.remove(); это удаление 
//     // event.target.style.display = 'flex';
//     i++;
//     if (i == 1) {
//         event.target.style.display = 'flex';
//     }if (i == 6) {
//         btn.removeEventListener('click', deliteElement); 
//         //сработало условие удаления обработчика и поэтому дальше ничего не произойдет
//     }
// };

// btn.addEventListener('click', deliteElement);


// -----------------всплытие события 

// const btn = document.querySelector('button');
//         overlay = document.querySelector('.overlay');

// const deliteElement = (event) =>  {
//     console.log(event.target);
//     // console.log(event.currentTarget);
//     console.log(event.type);
// };
// btn.addEventListener('click', deliteElement);
// overlay.addEventListener('click', deliteElement);


// const link = document.querySelector('a');
// link.addEventListener('click', function(event) {
//     event.preventDefault();//отмена стандартного поведения и дальше вставляем так как нам нужно.в начале ставиться
//     console.log(event.target);


// });

// ----------------------------ошибка

const deliteElement = (event) =>  {
    console.log(event.target);
    // console.log(event.currentTarget);
    console.log(event.type);
    event.target.style.display = 'flex';
};


const btns  = document.querySelectorAll('button');
        // overlay = document.querySelector('.overlay');
btns.forEach(btn => {
    btn.addEventListener('click', deliteElement);
    // btn.addEventListener('click', deliteElement, {once:true}); это что бы клик один раз
});


// btn.addEventListenerAll('click', deliteElement);
// overlay.addEventListener('click', deliteElement);