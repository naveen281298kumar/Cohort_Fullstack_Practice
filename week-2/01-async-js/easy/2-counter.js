/*Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/

let count1 = 0;
function counter2() {
  console.log(count1++);

  setTimeout(counter2, 1000);
}
counter2();