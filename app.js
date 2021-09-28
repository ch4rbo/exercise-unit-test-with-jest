const suma = (a,b) => {
    return a + b
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 106.58;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.00625;
    return valueInPound;
}

module.exports={suma, fromEuroToDollar, fromDollarToYen, fromYenToPound};