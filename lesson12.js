/*
Мария - управляющая Кафейни StartCoffe

Цыкорий: 120 / 0,3 -       39 - 100г
Американо: 120 / 0,2 -     зерна - 580 / 500
Латте: 300 / 0,5           молоко 85/л
Чай: 120 / 0,3             чай - 345 / 100ш

Аренда помещения - 380 000 / мес 
Кофемашина - 299 000

Ежедневне посешение людей от 10 до 150
*/

let bill = 0;
let rent = 380000;
let months = 12;
let menu = {
    zikoriy: {
        price: 120,
        v: 0.3,
        order: +((15 * 39) / 100).toFixed(2)
    },
    americano: {
        price: 120,
        v: 0.2,
        order: +((7 * 580) / 500).toFixed(2)
    },
    latte: {
        price: 300,
        v: 0.5,
        order: +((7 * 580) / 500).toFixed(2) + +((300 * 580) / 500).toFixed(2)
    },
    tea: {
        price: 120,
        v: 0.3,
        order: +(345 / 100).toFixed(2)
    }
}

function getNumber(max= 11, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);
}

let order = ["zikoriy","americano","latte","tea"];

function getOrder (bill) {
    // order.length - длинная массива - order = 4
    let product = order[getNumber(order.length)];
    bill -= menu[product].order;
    bill +=menu[product].price;
    console.log(`Купили чашку ${product}`)
    let chance = getNumber(3);
    if (chance >=2) {
        getOrder(bill);
    }
    return bill;
}
bill -= 299000
while (months) {
    bill -=rent;
    for (let i =0; i< 29; i++) {
        let ppl = getNumber(151, 10);
        for (let j = 0; j < ppl; j++) {
            bill = getOrder(bill);
        }
        console.log(`Сегодня в кафе побывало ${ppl} человек\nСумма на счету: ${bill} рублей.`)
    }
months--;
}
