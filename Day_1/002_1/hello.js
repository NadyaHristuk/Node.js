const fs = require('fs')

// fs.readFile('hello.txt', 'utf8', (error, content) =>
//   content
//     .split('\n')
//     .filter(line => line.includes('dog'))
//     .forEach(line => console.log(line))
// )

// let txt = fs.readFileSync('hello.txt', 'utf-8'){
//     console.log('file is reading')
// }
// console.log(content)

let txt = fs.readFileSync('hello.txt', 'utf-8');
// console.log(txt);

let txt_write = 'Hello world!!'+'\n' + txt;
fs.writeFile('some_new_file.txt', txt_write);