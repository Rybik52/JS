/*
while - цикл
*/

let apples = 5;
let peoples = 15;

while (apples < peoples) {
//    console.log("Не хватает яблок! Купим еще одно!");
    apples = apples + 1;
}

console.log("Все получили по одному яблоку!");




/*
Есть девочка Клава. Ей random лет (от 0 до 18);
Клаве каждый день рождения папа дарит на 10$ больше чем в прошлом году.
Папа обеспечивает подарками Клаву только до 18 лет! Сколько накопит Клава за свои дни рождения до 18 лет
*/

let age, present = 0, piggy = 0, oldment = 18;
age = Math.floor(Math.random() * 18);
console.log("Папа решил спансировать Клаву, Когда ей было " + age +  " лет.")
while (age < oldment) {
present += 10;
piggy += present
console.log(`Клаве исполнилось ${age} лет! \n Папа подарил Клаве ${present}$. Теперь у Клавы есть ${piggy}$`);
age++;
}

console.log(`За всю папину щедрость Клава согла накопить ${piggy}$`)