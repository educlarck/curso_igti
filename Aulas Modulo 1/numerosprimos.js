// Trabalho prático modulo 1

var n = 2;
var count = 0;
var i = 0;




for (i = 1; i <= n; i++) {
    if (n % i === 0) {
        count = count + 1;

    }
}
if (count === 2) {
    console.log("o numero "+n+" e um numero primo");
} else {
    console.log("o numero "+n+" nao e um numero primo");
}