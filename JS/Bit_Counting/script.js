'use strict'

const number = 7;

var countBits = function(n) {
    const desiredValue = '1';
    let binaryNumber = n.toString(2);

    return Array.from(binaryNumber)
                .filter(n => n === desiredValue)
                .length;
  };

  const bitsAmount = countBits(number);
  alert(bitsAmount);