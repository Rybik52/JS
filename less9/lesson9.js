/*

Игра - вилесица (угадай слово)
Слово - коллайдер
Количество ошибок = 6

1) Ввести букву
2) Сравниваем букву со словом
3) Если в слове есть эта буква - играем дальше
4) Если буквы нет - вычитаем количество попыток
...
5) Игра заканчивается  когда собрано слово, либо количество ошибок = 0
 */

const word = "Коллайдер";
let errCnt = 6;
let guessWord = "";

console.log(word);
console.log(word.charAt(5)); /* Находит букву по номеру, от нуля/ */
console.log(word.length); /* Покажет сколько всего символов в строке  */

// "Коллйдер"
// "--------"
/*

*/

for (let i = 0; i < word.length; i++) {
    guessWord += "-";
}
console.log(guessWord);
console.log(word.length === guessWord.length);


while (errCnt) {
    let char = prompt("Введите букву"); // Работает только в браузере
    let newWord = "";
    for (let i = 0; i < word.length; i++) {
        if (char.toLowerCase() === word.charAt(i).toLowerCase()) {
            // guessWord.charAt(i)= char;
        } else {
            newWord += guessWord.charAt(i);
        }
    }
    if (guessWord = newWord) {
        errCnt--;
    } else {
        guessWord = newWord;
    }

    /*
     word.toLowerCase() => все буквы маленькие
    word.toUpperCase() => все буквы большие
    */
    if (guessWord.toLowerCase() === word.toLowerCase()) {
        console.log("You win!");
        break;
    }
console.log(guessWord);
}
console.log("Game over!");