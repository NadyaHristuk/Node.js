function greet(name){
        return `Привет, ${name}`;
    }

module.exports = greet;

// module.exports = (function(){
//     return function(greening, name){
//         return `${greening}, ${name}`;
//     };
// })();