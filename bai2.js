
var number =[60, 40, 55, 75, 64];

console.log(number.reduce((sumWeight, curWeight, index) => {
    sumWeight[index % 2] += curWeight;
    return sumWeight;
}, [0, 0]))

