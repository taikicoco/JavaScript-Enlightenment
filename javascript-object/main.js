//オブジェクトの生成
let codyA = new Object();
codyA.living = true;
codyA.age = 33;
//メソッドの追加
codyA.getAge = function(){
    return cody.age;
}
console.log(codyA);

//コンストラクタ関数の定義
let Person = function(living,age){
    //thisはここで生成される新たなオブジェクト(this = new Objet();)
    this.living = living;
    this.age = age;
    this.getAge = function(){
        return this.age;
    };
};

let codyB = new Person(true,32);
console.log(codyB);
console.log(typeof codyB);
console.log(codyB.constructor);

//let string = new String('foo');
//console.log(string);

//プリミティブ型の値
let string = 'string';
let number = 10;
let boolean = false;
let myNull = null;
let myUndefined = undefined;
//これらの値は規約(irreducible,これ以上単純化されない)　=> プリミティブ値

let myObject = {
    string: 'string',
    number: 10,
    boolean: false,
    myNull:null,
    myUndefined:undefined,
}
console.log(myObject)

let myArray = ['string',10,false,null,undefined];
console.log(myArray);
//プリミティブ値はjsで一番低いレイヤの単位


//オブジェクトとプリミティブ
let primitiveNumber1 = 10;
let primitiveNumber2 = Number(10);
console.log(typeof primitiveNumber1,typeof primitiveNumber2);//number number

let myNumber = new Number(10);
console.log(typeof myNumber);//object

//プリミティブ値は値そのものを比較
let price1 = new Number(2);
let price2 = new Number(2);
console.log(price1 === price2);//false
console.log(price1 == price2);//false

let price3 = 10;
let price4 = 10;
console.log(price3 === price4);//true
console.log(price1 == price4);//false

let price5 = new Number(2);
let price6 = price5;
console.log(price5 === price6);//true

//オブジェクトはどのように保存・複製されるのか
let myObject2 = {};
let copymyObject2 = myObject2;
myObject2.foo = 'bar';
console.log(myObject2,copymyObject2);//{ foo: 'bar' } { foo: 'bar' }
//値を直接参照するプリミティブ型とは違い、オブジェクトは実体への参照を保持

let objectFoo = {same: 'same'};
let objectBar = {same: 'same'};
console.log(objectBar === objectFoo);//false
console.log(objectBar == objectFoo);//false

//オブジェクトは動的なプロパティを持つ
let obA = {propetry: 'value'};
let p1 = obA;
let p2 = p1;

p2.propetry = null;
console.log(obA,p1,p2);//{ propetry: null } { propetry: null } { propetry: null }