/*
Клава получала от мамы каждую неделю 1500
Каждый день Клава ела обед за 150-200 руб.
Клава получает кармынные деньги с 7 до 18 лет.
Отец давал Клаве с самого рождения на 10$ 
больше, чем в прошлом году. Курс доллара 78,0921
Сколько рублей накопит Клава к 18 годам?
*/

let piggyR = 0;
let piggyD = 0;
let  age = 0;
let stopAge = 18;
let gift = 0;
let dinnerPay = 0;
let dollarCourse = 78.0921;
let motherGift = 1500;
let daysOfWeek = 5;
let weeksOfYear = 37;

for (age = 1;age <= stopAge; age++) {
    gift += 10;
    piggyD += gift;
    if (age >= 7) {
        for (let weeks = 0; weeks < weeksOfYear; weeks ++) {
            piggyR += motherGift;
            console.log(`В ${weeks + 1} учебная неделя`);
            for (let days = 0; days < daysOfWeek; days ++) {
                dinnerPay = Math.random() * (251 - 150) + 150;
                dinnerPay = Math.floor(dinnerPay);
                console.log(`Клава потратила на обед ${dinnerPay} руб. `);
                piggyR -= dinnerPay;
            }
        }
    }
    console.log(`За год Клава накопила ${piggyD}$ и ${piggyR} руб.\n`)
}
piggyR += +(piggyD * dollarCourse).toFixed(2);

console.log(`За ${age} лет Клава накопила ${piggyR} рублей.`)