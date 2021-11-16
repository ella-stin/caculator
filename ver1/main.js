const caculator = {
    plus: function(a,b) {
        return a+b;
    },
    minus: function(a,b) {
        return a-b;
    },
    times: function(a,b) {
        return a*b;
    },
    divide: function(a,b) {
        return a/b;
    },
    power: function(a,b) {
        return a**b;
    }
}

const plusResult = caculator.plus(1,2);
const minusResult = caculator.minus(1,2);
const timesResult = caculator.times(1,2);
const divideResult = caculator.divide(1,2);
const powerResult = caculator.power(1,2);