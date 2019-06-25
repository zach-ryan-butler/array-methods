function map(arr, callback) {
    const mapped = [];
    for(let i = 0; i < arr.length; i++) {
        mapped[i] = callback(arr[i]);
    }
    return mapped;
}

function filter(arr, callback) {
    const filtered = [];
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            filtered[filtered.length] = arr[i];
        }
    }
    return filtered;
}

function findIndex(arr, callback) {
    for(let i = 0; i < arr.length; i++) {
        if(callback(arr[i])) {
            return i;
        }
    }
    return -1;
}

module.exports = { map, filter, findIndex };
