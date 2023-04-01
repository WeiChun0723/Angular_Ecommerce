/*
function ArrayList(...data:number[]) {
    return new Array().concat(data);
}
function ArrayList(...data:string[]) {
    return new Array().concat(data);
}
function ArrayList(...data:any[]) {
    return new Array().concat(data);
}

let mynumberarray:number[] = ArrayList(10, 20, 30, 40, 50, 60);
let mystringarray:string[] = ArrayList("John", "Peter", "Parker", "David");
let mixedarray:string[] = ArrayList(10, "John", 20, "Peter", "Parker", "David");
*/

function ArrayList<T>(...data:T[]) {
    return new Array().concat(data);
}

let mynumberarray:number[] = ArrayList<number>(10, 20, 30, 40, 50, 60);
let mystringarray:string[] = ArrayList<string>("John", "Peter", "Parker", "David");

class Customer<U, V> {

    public code:U;
    public passport:V;

    constructor(code:U, passport:V) {
        this.code = code;
        this.passport = passport;
    }

}

let customer01 = new Customer<number, number>(97409, 483834832);
let customer02 = new Customer<string, number>("C97409", 483834832);
let customer03 = new Customer<number, string>(97409, "E483834832");
let customer04 = new Customer<string, string>("C97409", "E483834832");