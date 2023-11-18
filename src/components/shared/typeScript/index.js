//basic types
var firstAge = 6;
var firstName = 'Felipe';
var isValid = true;
var idk = 5;
idk = '12';
idk = true;
var ids = [1, 2, 3, 4, 5];
var booleans = [true, false, true, false];
var names = ["Felipe", "jane"];
//Tupla
var person = [1, "Felipe"];
//Lista de tuplas
var people = [
    [1, 'Jane'],
    [2, 'Doe'],
];
//Intersections
var productId = false;
//Enum 
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
var direction = Direction.Up;
//Type Assertions
var productName = 'Bone';
//  let itemId = productName as string
var itemId = productName;
