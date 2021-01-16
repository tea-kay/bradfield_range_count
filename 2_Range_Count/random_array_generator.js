var arr = [];

function randomNumber(arrayLength) {
    for (i = 0; i < arrayLength; i++) {
        var num = Math.floor((Math.random() * 10
        ) + 1);
        arr.push(num);

    }
    console.log(arr);
}

randomNumber(40);