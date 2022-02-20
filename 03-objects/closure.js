function printNumbers() {

    for (var i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log("i=" + i);
        }, 1000 * i);
    };
}


function printWithIIFE() {

    for (var i = 1; i <= 5; i++) {
        (function (i) {
            setTimeout(function () {
                console.log("i: " + i);
            }, i * 1000);
        })(i);
    } // 1 2 3 4 5
}

printWithIIFE();
