//オブジェクトにオブジェクトと格納し、オブジェクトチェーンを生成
let object1 = {
    object1_1: {
        object1_1_1: {foo:'bar'},
        object_1_1_2:{}
    },
    object1_2: {
        object1_2_1: {},
        object1_2_2: {}
    }
};
console.log(object1.object1_1.object1_1_1.foo);//bar

//ドット記法とブラケット記法でオブジェクトのプロパティにアクセス
let cody = new Object();
//ドット記法
cody.age = 22;
cody.gender = 'male';
console.log(cody);//{ age: 22, gender: 'male' }
//ブラケット記法
let boy = new Object();
boy['age'] = 12;
boy['gender'] = 'male';
console.log(boy);//{ age: 12, gender: 'male' }

//delete演算子でプロパティを削除する
let foo = {bar:'bar'};
delete foo.bar;
console.log('bar' in foo)//false

//プロパティへの参照はどのように解決するのか


//hasOwnProperty()
//myObjectがfooプロパティを自身で定義しているかどうか
let myObject = {foo:'value'};
console.log(myObject.hasOwnProperty('foo'));//true

//in演算子
//オブジェクトがプロパティを保持しているかどうか
let fooObject = {foo:'value'};
console.log('foo' in fooObject);//true

// let barObject = {bar:'value'};
// console.log('tostring' in barObject);