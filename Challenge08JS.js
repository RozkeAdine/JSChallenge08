const note = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(tip){
    let result = 0
        if (tip > 300 || tip < 50){
            result = (tip * 15)/100
    } else {
            result = (tip * 20)/100
    }
        return result
}

for (let i = 0; i < note.length; i++) {
    (tips.push (calcTip(note[i])));
}
console.log(tips);

for (let i = 0; i < note.length; i++) {
    (tips.push (calcTip(note[i])));
    totals.push (note[i] + tips[i]);
}
console.log(totals);

function calcAverage(avr) {
    let avrMoney = 0
    let avrResult = 0

    for (let i = 0; i < avr.length; i ++) {
    avrMoney = avrMoney + avr[i];
    }
    avrResult = (avrMoney / avr.length)
    return avrResult
}

console.log(calcAverage(tips));
console.log(calcAverage(totals));