/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
  return new Promise(function (resolve) {
    let start = Date.now();
    while (Date.now() < start + milliseconds) {}
    resolve(Date.now() - start);
  });
}

sleep(3000).then(function (resolve) {
  console.log(`sleep function resolve after ${resolve} time`);
});
module.exports = sleep;
