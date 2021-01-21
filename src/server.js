const fs = require('fs')
const path = require('path')
const csv = require('fast-csv')


function readcsv(csvfile) {

  fs.createReadStream(path.resolve(__dirname, 'assets', `${csvfile}`))
    .pipe(csv.parse({ headers: true }))
    .on('error', (error) => console.log(error))
    .on('data', (row) => {
      console.log(JSON.stringify(row))
    })
    // .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`))
    .on('data', (data) => fs.createWriteStream())

}


function comparecsv(download) {
  readcsv('answers.csv')

  // setTimeout(() => {
  //   console.log(`Student's answer`)
  //   readcsv(download)
  // }, 500); 
}

comparecsv('download.csv')




