let cody1 = new Object();
let cody2 = new Object(undefined);
let cody3 = new Object(null);

console.log(cody1,cody2,cody3);//{} {} {}
console.log(typeof cody1, typeof cody2, typeof cody3);//object object object



//Objectをオブジェクトリテラルで生成
 let cody = {
    living:true,
    age:33,
    gender:'male',
    getGender: function() {return cody.gender}
 };
 console.log(cody);
//  {
//     living: true,
//     age: 33,
//     gender: 'male',
//     getGender: [Function: getGender]
//   }

