const fs = require('fs')
const path = require('path')
const csv = require('fast-csv')
const parse = require('papaparse')
const Papa = require('papaparse')


// function readcsv(csvfile) {
//   fs.readFile(`${__dirname}/assets/${csvfile}`, 'utf-8', async (err, csv) => {
//     if (err) {
//       return console.log(err)
//     }

//     let data = Papa.parse(csv, { header: true }).data
//     let total = data.length

//     console.log(data)
//     return data
//     console.log(total)
//   })
// }


function comparecsv(csvfile) {
  // readcsv(download)
  fs.readFileSync(`${__dirname}/assets/${csvfile}`, 'utf-8', (err, csv) => {
    if (err) {
      return console.log(err)
    }

    return Papa.parse(csv, { header: true }).data
    // let total = data.length

    // return data
  })

}


console.log(comparecsv('download.csv'))
console.log(comparecsv('answers.csv'))


