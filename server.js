function callback() {
    console.log('This is a callback function ');
}


const add = (a, b, callback) => {
    var res = a + b;
    console.log('result is : ' + res);
    callback();
}

add(3, 4, callback);