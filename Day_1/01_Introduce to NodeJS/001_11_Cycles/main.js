// Пример показывает, как не надо делать.
// Очень не желатльно делать перекрёстные ссылки внутри модулей, 
// которые потом подключаються к основному модулю

console.log('Main module is starting.');

var a = require('./testA.js');
var b = require('./testB.js');

console.log('in main, testA.done=', a.done, ' testB.done=' , b.done);