const map = function map(arr, callback) {
    const array = [];
    for(let i = 0; i < arr.length; i++) {
        array[i] = callback(arr[i]);
    }
    return array;
};

module.exports = { map };
