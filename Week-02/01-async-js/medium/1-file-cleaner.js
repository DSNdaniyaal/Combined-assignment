// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.
const fs = require('fs')

let data = fs.readFileSync('./a.txt', 'utf-8', (data,err) => {
    if(err) console.log(err)
    else console.log("data read successfully")
})

let res=""
for(let i=0;i<data.length;i++){
    if(data[i] === ' '){
        res += ' '
        while(i<data.length && data[i] === ' ')i++
        i--;
    } else {
        res += data[i];
    }
}

fs.writeFile('./a.txt', res, (err) => {
    if(err) console.log(err)
})
// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```