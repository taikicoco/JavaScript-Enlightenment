//javascript関数は第一級関数
let funcA = function(){};//funcA()
let funcB = [function(){}];//funcB[0]()
let funcC = {method: function(){}};//funcc.method() or funcC['method']()

let funcD = function(func){
    return func;
};

let runFuncPassedToFuncD = funcD(function() {
    console.log('Hi');
});
runFuncPassedToFuncD();

//関数はオブジェクト
//プロパティを持てる
let funcE = function(){};
funcE.answer = 'yea';
console.log(funcE.answer);