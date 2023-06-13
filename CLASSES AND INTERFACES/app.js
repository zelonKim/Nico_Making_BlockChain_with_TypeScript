/* class Player {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickname: string
    ) {}
}

const nico = new Player("nico","las","nikko")

nico.firstName // 오류 발생 (Property 'firstName' is private and only accessible within class 'Player'.)
nico.firstName  // 오류 발생
nico.nickname // 정상 실행 */


/////////////////


/* abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickname: string
    ) {}
}


class Player extends User {

} // 추상 클래스는 다른 클래스로 상속만 가능


const nico = new User("nico","las","nikko") // 오류 발생 (추상클래스는 직접 인스턴스를 만들지는 못함.)
 */


///////////////////////


/* abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickname: string
    ) {}
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


class Player extends User {

} 

const nico = new Player("nico","las","nikko") 

nico.getFullName() // 정상 실행 ("nico las") */


/////////////////////


/* abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickname: string
    ) {}
    
    private getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}


class Player extends User {

} 

const nico = new Player("nico","las","nikko") 

nico.getFullName() // 오류 발생 (Property 'getFullName' is private and only accessible within class 'User'.)
 */

///////////////////////


/* 
abstract class User {
    constructor(
        private firstName: string,
        private lastName: string,
        public nickname: string
    ) {}
    
    abstract getNickName(): void
}


class Player extends User {

} // 오류 발생 (Non-abstract class 'Player' does not implement inherited abstract member 'getNickName' from class 'User'.)
 */

//////////////////////

/* 
abstract class User {
    constructor(
        private firstName: string,
        protected lastName: string,
        public nickname: string
    ) {}
    
    abstract getNickName(): void
}


class Player extends User {
    getNickName() {
        console.log(this.firstName)  // 오류 발생 (상속받은 클래스에서도 private프로퍼티에 접근할 수 없음.)
    }
}

const nico = new Player("nico", "las", "nikko")

nico.firstName // 오류 발생 (클래스 외부에서 private프로퍼티에 접근할 수 없음.)
 */

/////////////////////


/* abstract class User {
    constructor(
        private firstName: string,
        protected lastName: string,
        public nickname: string
    ) {}
    
    abstract getNickName(): void
}


class Player extends User {
    getNickName() {
        console.log(this.lastName)  // 정상 실행 ('상속받은 클래스'에서는 protected 프로퍼티에 접근할 수 있음.)
    }
}

const nico = new Player("nico", "las", "nikko")

nico.lastName // 오류 발생 (클래스 외부에서 protected 프로퍼티에 접근할 수 없음.)
 */

///////////////////////



/* abstract class User {
    constructor(
        private firstName: string,
        protected lastName: string,
        public nickname: string
    ) {}
    
    abstract getNickName(): void
}


class Player extends User {
    getNickName() {
        console.log(this.nickname)  // 정상 실행 (상속받은 클래스에서 public 프로퍼티에 접근할 수 있음.)
    }
}

const nico = new Player("nico", "las", "nikko")

nico.nickname // 정상 실행 (클래스 외부에서 public 프로퍼티에 접근할 수 있음.) */


////////////////////////////



/* type Words = {
    [key: string]: string // string타입의 [프로퍼티 키]를 가짐.
}

class Word {
    constructor(
        public term: string,
        public def: string
    ) {}
}

class Dict {
    private words: Words
    
    constructor() {
        this.words = {}
    }
    
    add(word: Word) { // 클래스를 타입처럼 사용할 수도 있음.
        if(this.words[word.term] === undefined) {
            this.words[word.term] = word.def
        }
    }
    def(term: string) {
        return this.words[term]
    }
}

const kimchi = new Word("kimchi", "korean food")

const dict = new Dict()

dict.add(kimchi)
dict.def("kimchi") // korean food */



/////////////////////////




/* type Team = "red" | "blue" | "yellow" 
type Health = 1 | 5 | 10 

type Player = {
    nickname: string,
    team: Team
    health: Health
}

const nico: Player = {
    nickname: "nikko",
    team: "pink",  // 오류 발생 (Type '"pink"' is not assignable to type 'Team')
    health: 8  // 오류 발생 (Type '8' is not assignable to type 'Health'.)
} */


////////////////////////////


/* type Team = "red" | "blue" | "yellow" | "pink"
type Health = 1 | 5 | 10 | 8

type Player = {
    nickname: string,
    team: Team
    health: Health
}

const nico: Player = {
    nickname: "nikko",
    team: "pink", // 정상 실행
    health: 8 // 정상 실행 
}
*/

////////////////////////



/* type Team = "red" | "blue" | "yellow" 
type Health = 1 | 5 | 10 

interface Player {
    nickname: string,
    team: Team
    health: Health
}

const nico: Player = {
    nickname: "nikko",
    team: "red",
    health: 10
} */

///////////////////////



/* interface User {
    name: string
}

interface Player extends User { // 인터페이스는 다른 인터페이스를 상속 받을 수도 있음.
    
}

const nico: Player = {
    name: "nico"
}  */


/* 
type User = {
    name: string
}

type Player = User & {

}

const nico: Player = {
    name: "nico"
}  
*/

//////////////////////


/* interface User {
    name: string
}

interface User {
    lastName: string
}

interface User {
    health: number
}

const nico: User = { // 같은 이름의 인터페이스들은 자동으로 하나로 합쳐짐.
    name: "nico",
    lastName: "las",
    health: 10
} */



//////////////////////////


/* interface User {
    firstName: string,
    lastName: string
    sayHi(name: string): string
    fullName(): string
}

class Player implements User{
    constructor(
        public firstName: string,
        public lastName: string
    ) {}
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `hello ${name}, My name is ${this.fullName()}`
    }
} */

//////////////////////


/* interface User {
    firstName: string,
    lastName: string
    sayHi(name: string): string
    fullName(): string
}

interface Human {
    health: number
}

class Player implements User, Human { // 인터페이스를 여러 개 구현할 수도 있음.
    constructor(
        public firstName: string,
        public lastName: string,
        public health: number
    ) {}
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    sayHi(name: string) {
        return `hello ${name}, My name is ${this.fullName()}`
    }
} */