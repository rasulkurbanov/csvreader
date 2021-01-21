const fs = require('fs')
const path = require('path')
const csv = require('fast-csv')
const parse = require('papaparse')
const Papa = require('papaparse')


// let data1 = [];

function readcsv(csvfile) {

  // fs.createReadStream(path.resolve(__dirname, 'assets', `${csvfile}`))
  //   .pipe(csv.parse({ headers: true }))
  //   .on('error', (error) => console.log(error))
  //   .on('data', (row) =>  console.log(row))
  //   .on('end', (rowCount) => console.log(`Parsed ${rowCount} rows`))

  fs.readFile(`${__dirname}/assets/${csvfile}`, 'utf-8', async(err, csv) => {
    if(err) {
      return console.log(err)
    }

    let data = Papa.parse(csv).data
    let total = data.length


    console.log(data)
    console.log(total)

  })

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
  





// function jsoncompare(a, b) {
//   // return JSON.stringify(a) === JSON.stringify(b)
//   // console.log(JSON.stringify(a))
//   // console.log(JSON.stringify(b))

//   // console.log(Object.values(a))
//   // console.log(Object.values(b))

//   let data = []

//   if(Object.values(a)[0] === Object.values(b)[0]) {

//     if(Object.values(a)[1] === Object.values(b)[1]) {
//       console.log('fantastisch')
//     }
//     else{
//       data.push(a)
//       data.push(b)
//     }
//     console.log(data)

//   }
//   else console.log('NOoo')
 
// }


// jsoncompare({ A: '1395', B: '0.0' }, { '0': '1395', '1': '1.0' })


