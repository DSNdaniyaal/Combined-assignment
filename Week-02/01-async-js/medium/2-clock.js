// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?


function updateTime (){
    let currTime = new Date().toTimeString().slice(0, 8);
    console.log(currTime);
}

setInterval(updateTime, 1000)

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
