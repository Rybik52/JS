
/*
ворон 0, 5-20, 25-30 => else
варона 1 21 => n % 10 === 1
вороны 2-4, 22-24
*/

let subj = "ворон", verb = "сидел";
let n =(Math.floor(Math.random()*1001));
if (n % 100 < 11 || n % 100> 14)
if (+n % 10 ===1 && n %100 !== 11) {
    subj += "а";
    verb += "а"; // verb = verb + "а"
} else if (n % 10 >= 2 && n % 10 <= 4) {
subj += "ы";
verb += "и";
} else {
    verb += "о";
} else {
    verb += "о";
}

// const AGE = 15;

console.log(`На ветке ${verb} ${n} ${subj}`);

console.log (Math.PI);
console.log (Math.E);
/*
Math.sin(x)
Math.cos(x)
Math.tg(x)
Math.ctg(x)
Math.atg(x)


Math.round(x) - округлить до ближайшего целого числа 
Math.ceil(x) - округлить к ближайшему целому числу в большую сторону
Math.floor(x) - округлить к ближайшему целому числу в меньшую сторону

Math.pow(x, step) - возвести в степень x** step
Math.sqrt(x) - взять квадратный корень

Math.random() - получает случайное число от 0 до 1
*/

console.log (Math.ceil(Math.random()*100));
console.log (Math.floor(Math.random()*101));
/* 0<= rand < 1 */

/* 0 <= rand * 100<100 */