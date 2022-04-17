// default vs optional
function func(x?: number) {
}
function func2(x: number = 10) {
}

// overloading
function func1(x: number): void;
function func1(x: string): number;

// void is not the same as undefined
function func1(x: number | string): number | void {
    if (typeof x === 'string') {
        return parseInt(x);
    }
}

// rest params
function multiply(n: number, ...m: number[]) {
    return m.map((x) => n * x);
}
const a = multiply(1, 2, 3, 4);
// spread syntax
const arr = [2, 3, 4]
const b = multiply(1, ...arr);