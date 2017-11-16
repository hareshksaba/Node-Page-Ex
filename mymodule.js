var sayHello = function() {
    console.log('Hello from mymodule');
}

var sayGoodbye = function(){
    console.log('Goodbye from mymodule');
}

exports.sayHello = sayHello;
exports.sayGoodbye = sayGoodbye;
