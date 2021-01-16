var arr = [];

function randomNumber(arrayLength) {
    for (i = 0; i < arrayLength; i++) {
        var num = Math.floor((Math.random() * 10
        ) + 1);
        arr.push(num);

    }
    console.dir(arr.sort(function(a, b) {
        return a - b}), {'maxArrayLength': null});
}

randomNumber(1000);

