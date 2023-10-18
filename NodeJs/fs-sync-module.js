const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./basics/first.txt', 'utf-8')
const second = readFileSync('./basics/second.txt', 'utf-8')

writeFileSync('./basics/programmCreated.txt', 
    `Here is the content of files: ${first}, ${second}`,
    { flag: 'a' }    
)