//basic types
let firstAge: number = 6
const firstName: string = 'Felipe'
const isValid: boolean = true
let idk: any = 5

idk = '12'
idk = true

const ids: number[] = [1, 2, 3, 4, 5]
const booleans: boolean[] = [true, false, true, false]
const names: string[] = ["Felipe", "jane"]

//Tupla
const person: [number, string] = [1, "Felipe"]
//Lista de tuplas
const people:[number, string][]=[
    [1,'Jane'],
    [2, 'Doe'],
]
//Intersections
const productId: string | number | boolean  = false
//Enum 
enum Direction {
    Up = 1,
    Down = 2,
}

const direction = Direction.Up
 //Type Assertions
 const productName: any = 'Bone';
//  let itemId = productName as string
let itemId = <string>productName
 


