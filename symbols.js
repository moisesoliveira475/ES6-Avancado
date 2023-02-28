const uniqueId = Symbol('hello');
const uniqueId2 = Symbol('hello');

console.log(uniqueId === uniqueId2)
//valores únicos

const arr = [1, 2, 3, 4, 5];
const str = 'Dio';

/* console.log(arr[Symbol.iterator]().next()) */;

const obj = {
    values: [1, 2, 3, 4, 5],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;
                return {
                    value: this.values[i-1],
                    done: i>this.values.length
                };
            }
        };
    }
};

const it = obj[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let value of obj) {
    console.log(value)
}

const arr2 = [...obj]

console.log(arr2)