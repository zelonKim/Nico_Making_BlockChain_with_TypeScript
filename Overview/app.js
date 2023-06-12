/* let  a = "hello"  // 타입스크립트가 a를 string 타입으로 자동 추론함.
a = "bye" // 정상 실행
a = 123 // 오류 발생

let a = [1,2,3] // a를 number 배열로 자동 추론함.
a.push(4) // 정상 실행
a.push("hello") // 오류 발생 */

/////////////////////

/* let a : string = "hello" // 정상 실행
let a : string = 1234 // 오류 발생

let a: number[] = []
a.push(4) // 정상 실행
a.push("hello") // 오류 발생 */

////////////////////


/* let player: {
    name: string,
    age?: number
}  = {
    name: "nico"
} // 정상 실행

let player: {
    name: string,
    age: number
}  = {
    name: "nico"
}// 오류 발생 (Property 'age' is missing in type) */


///////////////////////

/* 
type Player = {
    name: string,
    age?: number
}
const playerNico: Player = {
    name: "nico"
} // 정상 실행


type Player = {
    name: string,
    age?: number
}
const playerNico: Player = {
    name: 1234
} // 오류 발생  */


/////////////////


/* function playerMaker(name: string) {
    return {
        name: name,
    }
}
const nico = playerMaker("nico")
nico.age = 12 // 오류 발생 (Property 'age' does not exist on type)
 */

/* type Player = {
    name: string,
    age?: number
}
function playerMaker(name: string): Player { // string타입의 인수를 받고, Player타입의 값을 return함.
    return {
        name: name,
    }
}
const nico = playerMaker("nico")
nico.age = 12  // 정상 실행 */

/////////////////

/* type Player = {
    name: string,
    age?: number
}

const playerMaker = (name: string): Player  => ({name})

const nico = playerMaker("nico")
nico.age = 12 */

/////////////////////

/* type Player = {
    name: string,
    age?: number
}

const playerMaker = (name: string): Player  => ({name})

const nico = playerMaker("nico")
nico.name = "seongjin" // 정상 실행 */


/* type Player = {
    readonly name: string,
    age?: number
}

const playerMaker = (name: string): Player  => ({name})

const nico = playerMaker("nico")
nico.name = "seongjin" // 오류 발생  */

/////////////////

/* let arr: number[] = [1,2,3]
arr.push(4) // 정상 실행 */

/* let arr: readonly number[] = [1,2,3]
arr.push(4) // 오류 발생 */

////////////////////

/* const player: [string, number, boolean] = ["nico", 1, true] // 정상 실행

let player: [string, number, boolean] = ["nico", 1] // 오류 발생

let player: [string, number, boolean] = ["nico", 1, false, 123] // 오류 발생

let player: [string, number, boolean] = ["nico", 1, "hello"] // 오류 발생
 */
////////////////////

/*
let player: [string, number, boolean] = ["nico", 1, true]
player[0] = "seongjin" // 정상 실행


let player: readonly [string, number, boolean] = ["nico", 1, true]
player[0] = "seongjin" // 오류 발생 
*/

//////////////////

/* let a = 1
a = "hello" // 오류 발생

let a: any = 1
a = "hello" // 정상 실행 */

///////////////////

/*
 let a: unknown;
let b = a + 1 // 오류 발생 ('a' is of type 'unknown'.)

if(typeof a === 'number') {
   let b = a + 1
} // 정상 실행 
*/

///////////////////////

/*
 function hello(): void {
    return "hi"
} // 오류 발생

function hello(): void {
    console.log("hi") 
} // 정상 실행

function hello() { // void는 생략해줄 수도 있음.
    console.log("hi")
}
*/

/////////////////////


/*
 function hello(): never {
    return "hi"
} // 오류 발생

function hello(): never {
    console.log("hi")
} // 오류 발생

function hello(): never {
   throw new Error("bye")
} // 정상 실행
 */
