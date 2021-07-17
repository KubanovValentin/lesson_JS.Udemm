'use strict';
// console.log(document.head);
// console.log(document.documentElement);
//родительский элемент это тот который обьеденяет другие и находяться они внутри его

// console.log(document.body.childNodes);//показывает все ноды все узлы DOM дерева в нутри этого родителя
// перенос строки это текстовая нода 

// console.log(document.body.firstChild);
// console.log(document.body.lastChild);
//сдесь отталкиваемся от родителя


// -------------------отталкнуться от любого 

// console.log(document.querySelector('#current').parentNode);
//сдесь получаем элемент и нам надо выше посмотреть и делаем это благодаря команде parentNode
//если хотим еще выше то 
// console.log(document.querySelector('#current').parentNode.parentNode);



// ---------------------------------------ориентиры
// для этого были созданны data ориентиры 
// data-current вторая часть произвольная типо data-modal data-close мы пишем то к чему прилипаем
// если мы пишем без значения то оно соответствует true 


// для того чтобы получить какой либо html атрибут делаем ниже 
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('[data-current="3"]').nextSibling);// следующий сосед
// console.log(document.querySelector('[data-current="3"]').previousSibling);//предыдущий сосед

// ЭТИМИ КОМАНДАМИ ПОЛУЧАЕМ ТЕКСТОВЫЕ УЗЛЫ (НОДЫ)
// А ЕСТЬ И АНАЛОГИЧНЫЕ КОМАНДЫ КОТОРЫЕ ПОКАЗЫВАЮТ ЭЛЕМЕНТЫ 
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('#current').parentElement);
// console.log(document.body.firstElementChild);


// -------------------
// задача перебратьть все элементы и избавиться от нод
// console.log(document.body.childNodes);
for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {
        continue;
    }
    // благодаря этому я остановил цикл на ноде
    console.log(node);
}