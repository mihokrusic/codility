let lessons = {};

lessons[1] = require('./lesson01');
lessons[2] = require('./lesson02');
lessons[3] = require('./lesson03');

let lesson = 1;
if (process.argv.length >= 3 && !isNaN(process.argv[2]))
    lesson = +process.argv[2];

let task = 1;
if (process.argv.length >= 4 && !isNaN(process.argv[3]))
    task = +process.argv[3];

let param;
if (process.argv.length >= 5 && !isNaN(process.argv[4]))
    param = process.argv[4];

console.log(`-----------------------------`);
console.log(`Result for ${lesson}, ${task}`);
console.log(lessons[lesson][task](param));