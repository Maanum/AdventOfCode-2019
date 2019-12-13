const fs = require('fs');
const filePath = './input.txt';

const getData = filePath => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) throw err;
       inputMass = data.split(',');
       var numMass = inputMass.map(entry => parseInt(entry));
       resolve(numMass);
    });
  })
}

const processOpCode = (opCode, intCode) => {
  let value, position;
  value = opCode[0] == 1 ?
    intCode[opCode[1]] + intCode[opCode[2]] :
    intCode[opCode[1]] * intCode[opCode[2]];
  return [value, opCode[3]];
}

const processIntCode = intCode => {
  var currentPosition = 0;

  do {
    let opCode, updateValue, updatePosition;
    opCode = intCode.slice(currentPosition, currentPosition + 4);
    [ updateValue, updatePosition ] = processOpCode(opCode, intCode);
    intCode[updatePosition] = updateValue;
    currentPosition = currentPosition + 4;
  }
  while (intCode[currentPosition] != 99);
  console.log(intCode[0]);

}

getData(filePath)
  .then(data => {
    var updatedData = data;
    updatedData[1] = 12;
    updatedData[2] = 2;
    processIntCode(updatedData);
  })







