// Классы

// let a = {
//     x: 20,
//     y: 10,
//     moveTo: function(newX, newY) {
//         this.x =  newX;
//         this.y = newY;
//     }
// }

// let b = {
//     x: 17,
//     y: 23,
//     moveTo: function(newX, newY) {
//         this.x =  newX;
//         this.y = newY;
//     }
// }

// console.log(a.x, a.y);
// a.moveTo(10, 5);
// console.log(a.x, a.y);


// Создание протатипа объекта (типа класса, но на JS)

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.moveTo = function(newX, newY) {
    this.x = newX;
    this.y = newY;
}
Point.prototype.toString = function() {
    return `Точка с координатами (x ${this.x}; y ${this.y})`;
}

let n = 4; // nwe Number(4); Number() => Object() => Global
let word = "Hello"; // new String("Hello")

let A = new Point(12, 50);
let B =new Point(6, 14);
A.moveTo(10, 10);
console.log(A.toString());
console.log(B.toString());