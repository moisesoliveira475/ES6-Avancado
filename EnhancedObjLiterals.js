/* function method() {
    console.log('method called');
}
 var obj = {
    method
 }

 obj.method();

 var obj1 = {
    sum(a, b) {
        return a + b;
    }
 }
 console.log(obj); */

 //
/*  var propName = 'test';

 var obj2 = {};

 obj2[propName] = 'prop value';

 console.log(obj2) */

 var propName = 'test'
 
 var obj = {
    [propName + 'concat']: 'prop value'
 }
 console.log(obj)
