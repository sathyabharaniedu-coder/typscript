export {}

let a = [1, 2, [3, 4, [5, 7, 7]]];

function flatten(arr: any[]): any[] {
    let result: any[] = [];

    for (let item of arr) {
        if (Array.isArray(item)) {
            result.concat(flatten(item));
        } else {
            result.push(item);
        }
    }

    return result;
}

console.log(flatten(a));