const XLSX = require('xlsx')

/**
 * Takes in the path to an excel sheet then returns a big JSON array of all the data in it.
 * Only pays attention to what's on the first sheet in the file. 
 * 
 * @param string filePath 
 */
async function parseExcelSheet(filePath) {

    /**
     * Workbook object loaded from actual data file
     */
    let workbook = XLSX.readFile(filePath, {
        raw: true
    })
    /**
     * Name of the first sheet in the workbook object
     */
    let sheetName = workbook.SheetNames[0]

    // console.log(Object.values(workbook.Sheets[sheetName]))
    // process.exit()

    /**
     * Data from the first sheet in the workbook object
     */
    return XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
}

module.exports = parseExcelSheet