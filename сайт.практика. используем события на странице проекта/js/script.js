/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики


//иногда ввиду того что есть тяжелые картинки или видио сайт прогружаеться долго,
//и получаеться что скрипты могут загрузиться раньше чем структура HTML 
//и тогда скрипты не будут работать.для этого мы заворачиваем все скрипты 
//в document.addEventListener('DOMContentLoaded') как делаем ниже
// window и document это практически одинаковые значения 


document.addEventListener('DOMContentLoaded', () =>{
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
        
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
            poster = document.querySelector('.promo__bg'), 
            promoGenre = poster.querySelector('.promo__genre'),
            movieList = document.querySelector('.promo__interactive-list'),
            addForm = document.querySelector('form.add'),
            addInput = addForm.querySelector('.adding__input'),
            checkbox = addForm.querySelector('[type="checkbox"]');//удобнее всего найти через атрибут таким способом
            
    //дальше назначим обработчик события на нашу форму 
    //чтобы отследить наш обработчик событий есть submit
    // понадобиться обьект события event 

    addForm.addEventListener('submit', (event) => {
        // отменяем стандартное поведение браузера
        // для того чтобы при отправке страничка не перезагружалась 
        event.preventDefault();
        let newFilm = addInput.value; //мы создали переменную для того чтобы отображалось при вводе пользователем
        const favorite = checkbox.checked;//включенно(что бы получить булиновое значение-сейчас true)

        // избавляемся от ввода пустой строки и делаем так 
        if (newFilm) {
            //выполняем задание 2        
            //2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки 
            // выполняем благодаря свойству length
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;//у нас подсветилось newFilm красным значит ошибка и 
                                                        //заменяем const на let т.к изменяеться значение переменной
            }
            // 4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
            // "Добавляем любимый фильм"
            if (favorite) {
                console.log("добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);//этом мы запушили новый фильм в базу данных
            sortArr(movieDB.movies);
    // для того что бы попадал новый фильм введеный пользователем надо создать переменную как ниже
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();


    });

    //переменная удаления рекламы
    const deleteAdv = (arr) => {
        arr.forEach(item => {       
            item.remove();              
        });  
    };
    // deleteAdv(adv);  перенесли вниз так как это правильно


    // переменная изменений на сайте,обьеденили сдесь
    const makeChanges = ()  => {
        promoGenre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    // makeChanges();перенесли вниз так как это правильно
    
// переменная сортировки
    const sortArr = (arr) => {
    arr.sort();
    };

    // sortArr(movieDB.movies);перенесли вниз так как это правильно
    
    function createMovieList(film, parent) {
        parent.innerHTML = '';
        sortArr(film);
        film.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item"> ${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });
        //выполняем 3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
        //смысл такой-клик на корзину и делид родителя
        //мы должны получить все корзинки .delete
        // если мы хотим навесить одно и тоже событие на разные элементы то используем forEach(перебор)
        // дальше нам понадобяться 2 аргумента (каждая отдельная кнопка и нумерация )
        //нумерация особенно нужна потому что список фильмов в movieDB идет по порядку 
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                // btn.parentElement.style.transform = "scale(1.1)";

                movieDB.movies.splice(i, 1);
                // для того чтобы нумерация списка менялась как и надо мы уже использовали до этого 
                //createMovieList он и служит для нумерации текста и просто вставим его ниже
                createMovieList(film, parent);
            });
        });
        
    }
//правильно все функции(вызов) писать имеено внизу как сейчас и напишем,а то что перенесли закоментируем
    deleteAdv(adv);
    makeChanges();
    // sortArr(movieDB.movies); ввиду того что мы сделали удаление элементов то они не меняються по алфавиту
    //для этого мы поместим данный код выше после того как удалились элементы и запустилось createMovieList
    createMovieList(movieDB.movies, movieList);
});