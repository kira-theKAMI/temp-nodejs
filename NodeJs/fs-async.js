const { readFile, writeFile } = require('fs')

readFile('./basics/first.txt', 'utf-8', (err, result)=>{

    if (err){
        console.log(err);
        return;
    }

    const first = result;

    readFile('./basics/second.txt', 'utf-8', (err, result)=>{

        if (err) {
            console.log(err);
            return;
        }

        const second = result;

    writeFile('./basics/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result)=>{
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    })
    });
});