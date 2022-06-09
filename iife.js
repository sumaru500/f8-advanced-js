/**
 * Using IIFE to private data and run immediately only once.
 */
export const carStore = (function() {
    const cars = [];
    return {
        add(car) {
            cars.push(car);
        },
        remove(car) {
            cars.splice(cars.indexOf(car), 1);
        },
        edit(index, car) {
            cars[index] = car;
        },
        get(index) {
            return cars[index];
        },
        getAll() {
            return [...cars];
        }
    }
})();

export function useStore(initialStore) {
    var store = initialStore;
    
    return [
        store,
        function setStore(newStore) {
            store = newStore;
        }
    ]; 
}

let [cars, setCars] = useStore([]);
