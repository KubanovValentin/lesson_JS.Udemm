/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
    
};



const promoAdv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'), //ввиду того что жанр лежит в .promo__bg и в дальнейшем мы его  
        promoGenre = poster.querySelector('.promo__genre'),//тоже затронем то через него обращаемся к promo__genre
        movieList = document.querySelector('.promo__interactive-list');


// ------------------------------------1 задание
// promoAdv.remove() так мы не можем потому что там целая коллекция img 

// promoAdv.style.display = 'none'; можно с помощью стиля убрать этот блок но он на самом деле есть 

promoAdv.forEach(item => {       // у нас есть класс .promo__adv в нем картинки img соответсвенно  применяем 
    item.remove();              //метод forEach это метод перебора, внутри пишем элементы(img) - item 
});                             // и применяем команду удаления remove.

//комбинация без стрелки(=>) точно такое же как выше 

// promoAdv.forEach(function(item) {     //это безымянная function которая работает только сейчас и все 
//     item.remove();
// });
// -------------------------------------2 задание
promoGenre.textContent = 'драма';// т.к работаем с текстом используем метод textContent



// --------------------------------------3 задание

// т.к мы уже его создали во 2 задании  то обращаемся poster
// ковычки не должны повторяться иначе будет синтаксическая ощибка
poster.style.backgroundImage = 'url("img/bg.jpg")';

// --------------------------- 4 задание 

// для начала найдем на страничке этот кусок кода (список)
// это  promo__interactive-list 
// дальше создадим переменную movieList

movieList.innerHTML = '';

movieDB.movies.sort(); //обращаемся к movieDB и сортируем методом sort в этой базе по алфавиту 

// теперь этот кусок кода надо поместить в html и все элементы  находяться в базе данных movieDB 
// перебираем базу данных методом forEach


movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item"> ${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});

// a = a + 1;
// a += 1 ;