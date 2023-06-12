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