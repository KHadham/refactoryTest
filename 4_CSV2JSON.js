const csvjson = require('csvjson');
const readFile = require('fs').readFile;
let newArray = []

readFile('./test.csv', 'utf-8', (err, fileContent) => {
    // if(err) {
    //     throw new Error(err);
    // }

    const jsonObj = csvjson.toObject(fileContent);
    newArray = jsonObj
    console.log(newArray);
});

function urutkan( a, b ) {
  if ( a.price < b.price ){
    return -1;
  }
  if ( a.price > b.price ){
    return 1;
  }
  return 0;
}

// var sort = newArray.sort( urutkan );

console.log('object', urutkan(newArray))