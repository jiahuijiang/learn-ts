function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

function firstStringElement<T extends string>(arr: T[]): T | undefined {
    return arr[0];
}

firstStringElement(["1", "2"]);
// error
// firstStringElement([1, 2])

firstElement<string | number>(["1", 2]);