let lessons = {};

for (var i = 1; i <= 8; i++)
    lessons[i] = require('./lesson0' + i);

let lesson = 1;
if (process.argv.length >= 3 && !isNaN(process.argv[2]))
    lesson = +process.argv[2];

let task = 1;
if (process.argv.length >= 4 && !isNaN(process.argv[3]))
    task = +process.argv[3];

let param;
if (process.argv.length >= 5)
    param = process.argv[4];

console.log(`-----------------------------`);
console.log(`Result for ${lesson}, ${task}`);
var start = new Date();
console.log(lessons[lesson][task](param));
var end = new Date() - start;
console.info('Execution time: %dms', end);