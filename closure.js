function createCounter () {
    let counter = 0;

    return () => ++counter;
}

export let counter1 = createCounter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

console.log("----------------------------------------------------------------");
export let counter2 = createCounter();

// console.log(counter2());
// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

// in-house local storage layer, work on js types 
// ~ OOP : 
//      storageKey => private attribute
//      store => private attribute
//      return an object  equivalent to this 
export function createStorage(storageKey) {
    // init storage
    const store = JSON.parse(localStorage.getItem(storageKey)) ?? {}; // ?? null or undefined
    // private function to save storage
    function save() {
        localStorage.setItem(storageKey, JSON.stringify(store));
    }

    // return all accessible functions for storage
    return {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save();
        },
        remove(key) {
            delete store[key];
            save();
        }
    };
}

let userInfo = createStorage('user');

userInfo.set('username', 'sumaru');
userInfo.set('password', '123456');

console.log(userInfo.get('username'));
console.log(userInfo.get('password'));

userInfo.remove('username');
console.log(userInfo.get('username'));

// Pratices

function a(x) {
    x++;
    return function () {
        console.log(++x);
    };
}

a(1)();
a(1)();
a(1)();

let x = a(1);
x();
x();
x();
// Output: ? 3 3 3 et 3 4 5

