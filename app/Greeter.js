/*用于测试json加载器*/
const  config = require('./tsconfig.json');

module.exports = function() {
    let greet = document.createElement('div');
    greet.textContent = config.greetText;
    return greet;
};