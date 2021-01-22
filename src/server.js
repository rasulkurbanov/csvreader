const fs = require('fs')
const path = require('path')
const csv = require('fast-csv')
const parse = require('papaparse')
const Papa = require('papaparse')

let data1;
let data2;

function readcsv(csvfile) {
  fs.readFile(`${__dirname}/assets/${csvfile}`, 'utf-8', (err, csv) => {
    if (err) {
      return console.log(err)
    }
    data2 = Papa.parse(csv, { header: true }).data
    let total = data2.length
  })

  fs.readFile(`${__dirname}/assets/answers.csv`, 'utf-8', (err, csv) => {
    if (err) {
      return console.log(err)
    }
    data1 = Papa.parse(csv, { header: true }).data
    let total = data1.length
  })
}


readcsv('download.csv')

// readcsv('answers.csv')

// console.log(data1)
setTimeout(() => {
  console.log(data1)
  console.log('data2' + ' is outputted')
  console.log(data2)
  
  let objKeys = Object.keys(data1[1])
  let objKeys2 = Object.keys(data2[1])

  

  for(let i=0; i<10; i++) {

    // console.log(data1[(Object.keys(data2[i])[0])])
    // if(Object.keys(data1[i])[0] === Object.keys(data2[i])[0]) {
    //   console.log('hee')
    // }
    // console.log(`${data1[i][objKeys[0]]} + ${data1[i][objKeys[1]]}`)
    // console.log(`${data2[i][objKeys2[0]]} + ${data2[i][objKeys2[1]]}`)


    if(data1[i][objKeys[0]] === data2[i][objKeys2[0]]) {
      if(data1[i][objKeys[1]] !== data2[i][objKeys2[1]]) {
        // console.log(data1[i], data2[i])
        let diff = data1[i][objKeys[1]] - data2[i][objKeys2[1]]
        console.log(diff)
      }
    }

  }

}, 500);

// console.log(comparecsv('download.csv'))











