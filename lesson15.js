/*
 Array - массив
 Масив - упорядоченная последовательность чего-угодно
 [] - пустой массив
 ["Печенька", 2, "Тралала", 0, 1, true, undefiend,23];

 arr.lenght => длина массива
 arr[0] => Обращение к первому элементу массива
arr[arr.length - 1] => Обращение к последниму индексу  
*/  





let ivan = ["Печенька", 2, "Тралала", 0, 1, true, undefined, 23];
// console.log(ivan.length);
// console.log(ivan[3]);
ivan[13] = "Igor";
// console.log(ivan.length);
// console.log(ivan[10]);

let numbers = [];
/* Наполнить массив 100 рандомнами числами (1-100) и посчитать их сумму */
/* function getNumber(max = 11, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

let i = 0;
while (i < 100) {
    numbers[i] = getNumber(101,1);
    i++;
}
// console.log(numbers);
for (let i = 0, cnt = numbers.length; i < cnt; i++) {
arrSum += numbers[i];
}

*/
// console.log(arrSum);







let fruits = [
    "Банан",
    "Манго",
    "Киви",
    "Яблоко",
    "Ананас",
    "Мандарин",
    "Хурма"
];

/*
Методы массив
.push(el) - добавить элемент в конец массива
.unshift(el) - добавить в самое начало массива
.pop() - забрать последний элемент массива
.shift() - забрать первый элемент
*/
fruits.push("Груша");
fruits.push("Картошка");
fruits.unshift("баклажан");
let last = fruits.pop();
console.log(fruits, last);

/*
 Дан массив из 100 чисел от 1 дл 100;
 Создать функцию, которая возвращяет массив из простых чисел от 1 до n - рандомное число
*/