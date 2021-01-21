const fs = require('fs')
const path = require('path')
const csv = require('fast-csv')


let data1 = [];

function readcsv(csvfile) {

  fs.createReadStream(path.resolve(__dirname, 'assets', `${csvfile}`))
    .pipe(csv.parse({ headers: true }))

    .on('error', (error) => console.log(error))

    .on('data', (row) =>  {
      data1.push(row)
    })
    .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`))
}

// setTimeout(() => {
//   console.log(data1)
// }, 2000);


function comparecsv(download) {
  readcsv('answers.csv')
  
  setTimeout(() => {
      console.log(`Student's answer`)
      readcsv(download)
    }, 500); 
  }
  
  comparecsv('download.csv')
  



