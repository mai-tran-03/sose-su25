const fs = require('fs');
const path = require('path');

// Create folder
// commonly use asynchronous functions, i.e., have a callback
// where function keeps going and finishes the callback later
// fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
//     // can also write as err => {...}
//     if (err) throw err;
//     console.log('Folder created...');
// });

// Create and write to file
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
//     if (err) throw err;
//     console.log('File written to...');


//     // Append to file (callback)
//     fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js', err => {
//         if (err) throw err;
//         console.log('File appended to...');
//     });
// });

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello-world.txt'), err => {
    if (err) throw err;
    console.log('File renamed');
})