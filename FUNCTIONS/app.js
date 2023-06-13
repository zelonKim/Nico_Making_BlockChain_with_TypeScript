/* type Add = (a:number, b:number) => number;
혹은
type Add = { (a:number, b:number) : number };

const add = (a, b) => a + b  // 오류 발생

const add: Add = (a, b) => a + b  // 정상 실행 */

////////////////////////

/* type Add = {
    (a: number, b: number): number
    (a: number, b: string): number
}

const add: Add = (a, b) => {
    if(typeof b === "string") return a
    else return a + b
} */

///////////////////////////

/* type Config = {
    path: string,
    state: object
}

type Push = {
    (path: string): void
    (config: Config): void
}

const push: Push = (config) => {
    if (typeof config === "string") {console.log(config)}
    else {
        console.log(config.path)
    }
} */

/////////////////////////

/* type Add = {
    (a: number, b: number): number
    (a: number, b: number, c:number): number
}

const add: Add = (a, b, c) => { // 오류 발생
    if(c) return a + b + c
    return a + b
}

const add: Add = (a, b, c?: number) => { // 정상 실행
    if(c) return a + b + c
    return a + b
} */


//////////////////////


/* type SuperPrint = {
    (arr: number[]): void
    (arr: boolean[]): void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1,2,3,4]) // 정상 실행
superPrint([true, false, true]) // 정상 실행
superPrint(["a", "b", "c"]) // 오류 발생
 */

//////////////////////////////

/* 
type SuperPrint = {
    (arr: number[]): void
    (arr: boolean[]): void
    (arr: string[]): void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1,2,3,4]) 
superPrint([true, false, true]) 
superPrint(["a", "b", "c"]) 
superPrint([1,"hello",false]) // 오류 발생 
*/


///////////////////////


/* type SuperPrint = {
    <potato>(arr: potato[]): void
}

const superPrint: SuperPrint = (arr) => {
    arr.forEach(i => console.log(i))
}

superPrint([1,2,3,4]) 
superPrint([true, false, true]) 
superPrint(["a", "b", "c"]) 
superPrint([1,"hello",false]) // 정상 실행 */



////////////////////////////


/* type SuperPrint = {
    <potato>(arr: potato[]): potato
}
const superPrint: SuperPrint = (arr) => arr[0]

superPrint([1,2,3,4]) // 정상 실행 */

////////////////////////


/* type SuperPrint = <T>(a: T[]) => T

const superPrint: SuperPrint = (arr) => arr[0]

superPrint([1,2,3,4],'hello') // 오류 발생 (Expected 1 arguments, but got 2.) */


/////////////////////////

/* type SuperPrint = <T>(a: T[], b:T) => T

const superPrint: SuperPrint = (arr) => arr[0]

superPrint([1,2,3,4],'hello') // 오류 발생 (Argument of type 'string' is not assignable to parameter of type 'number'.)
 */

///////////////////////

/* type SuperPrint = <T, M>(a: T[], b:M) => T

const superPrint: SuperPrint = (arr) => arr[0]

superPrint([1,2,3,4],'hello') // 정상 실행 */


////////////////////////////


/* function superPrint<T>(a: T[]){
    return a[0]
}

superPrint([1,2,3,4])  */


/////////////////////////////


/* type Player<T> = {
    name: string,
    extraInfo: T
}

const nico1: Player<string> = {
    name: "nico",
    extraInfo:"kimchi"
}

const nico2: Player<{favFood: string}> = {
    name: "nico",
    extraInfo: {
        favFood:"kimchi"
    }
} */

///////////////////////

/* type Num = Array<number>

let a: Num = [1,2,3,4] // 정상 실행
let b: Num = ["hello", "bye"] // 오류 발생 */