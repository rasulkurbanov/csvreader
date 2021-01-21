const fs = require('fs')
const path = require('path')
const csv = require('fast-csv')
const parse = require('papaparse')
const Papa = require('papaparse')


function readcsv(csvfile) {

  fs.readFile(`${__dirname}/assets/${csvfile}`, 'utf-8', async(err, csv) => {
    if(err) {
      return console.log(err)
    }

    let data = Papa.parse(csv, {header: true}).data

    let total = data.length

    console.log(data)
    console.log(total)

    for(let i of data) {

      fs.appendFile(`${__dirname}/assets/differ.txt`, JSON.stringify(data), async(err, csv) => {
        if(err) {
          return console.log(err)
        }
      })
      // console.log(JSON.stringify(i))
    }

  })
}


function comparecsv(download) {
  readcsv(download)
}
  
  comparecsv('download.csv')
  // comparecsv('answers.csv')
  
