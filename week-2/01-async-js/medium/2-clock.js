/*Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)*/

//  Using setInterval
/*
setInterval(() => {
  let time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();
  let amPm = hours > 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours == 0) {
    hours = 12;
  }
  console.log(`${hours}:${minutes}:${seconds} ${amPm}`);
}, 1000);
*/

// usin setTimeout

function clock() {
  let time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();
  let amPm = hours > 12 ? "PM" : "AM";
  hours = hours % 12;
  if (hours == 0) {
    hours = 12;
  }
  console.log(`${hours}:${minutes}:${seconds} ${amPm}`);
  setTimeout(clock, 1000);
}

clock();
