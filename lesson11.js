/*
Object - Объект - набор не упорядочнных пар "ключ=значение"
*/
let obj = {}; // это пустой объект
let capitals = {
    "Российская Федерация": "Moscow",
    italy: "Rome",
    spain: "Madrid",
    china: "Beijing" // "Пекин"
}

capitals.china = "Пекин";
capitals.america = "Washington";

delete capitals.italy;
console.log(capitals);

let cntr = "spain";

// console.log(capitals["Российская Федерация"]);
// console.log(capitals[cntr]);

let car = {
    model: "Mazda MX5",
    color: "coral",
    year: 1999,
    automat: false,
    user: {
        name: "Олег",
        rights: 12341414123
    },
    benzin: "dt",
    showInfo: function() {
        return `${this.user.name} обладает ${this.model} ${this.year} года  цвета ${this.color} с ${this.automat ? "автоматической" : "механической"} КПП `;
    }
}

// let str=`${this.user.name} обладает ${this.model} ${this.year} года  цвета ${this.color} с ${this.automat ? "автоматической" : "механической"} КПП `;

console.log(mazda.showInfo())
// if (car.automat) {
//     str += "автоматической";
// } else {
//     str += "механической"
// }
// str += " КПП"




/*
Вывести в кончоль фразу: 
У Олга есть Mazda MX5 1999 года кораллового
цвета с механической коробкой передач
*/