const fs = require('fs');

const filePath = './input.txt';

const getData = filePath => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) throw err;
       inputMass = data.split('\n');
       resolve(inputMass);
    });
  })
}

getData(filePath)
  .then(data => {
    let fuel = data.map(mass => {
      return Math.floor(mass / 3) - 2;
    })

    let result = fuel.reduce((a, b) => a + b, 0);
    console.log(result);
  })







