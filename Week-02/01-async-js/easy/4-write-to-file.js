// ## Write to a file

const fs = require('fs')

const data = "I am going to develop applications/tech that will change the entire flow of human history and how the tech is viewed";

fs.writeFile('./b.txt', data, (err) => {
    if(err) console.log(err)
    else console.log("File is saved")
})

// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.