var xlsx = require("xlsx")
var wb = xlsx.readFile("./test/specs/TestData/wdiotestdata.xlsx")

let totalsheets = wb.SheetNames
console.log(totalsheets)
let ws = wb.Sheets['Sheet1']
// console.log(ws)

let excelData = xlsx.utils.sheet_to_json(ws)

//  console.log(excelData);
console.log(excelData[1].userurl);
// console.log(excelData[0].username)
// console.log(excelData[0].password)


// let excel = xlsx.utils.sheet_to_txt(ws)
//  console.log(excel)
