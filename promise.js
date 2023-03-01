const doSomethingPromise = () => new Promise((resolve, reject) => {
    /* throw new Error('something went wrong'); */
    setTimeout(function() {
        //did something
        resolve('first data');
    }, 1500)
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
    /* throw new Error('something went wrong'); */
    setTimeout(function() {
        //did otherthing
        resolve('second data');
    }, 1000)
});
// pending
// fulfilled
// rejected

Promise.race([doSomethingPromise(), doOtherThingPromise()]).then((data => {
    console.log(data)
}))// a promise que executar primeiro ele traz os dados

/* Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => {
    console.log(data[0].split(''));
    console.log(data[1].split(''));
}).catch(error => console.log('ops', error));
//executa ao mesmo tempo as duas promises
*/

/* doSomethingPromise().then(data => {
    console.log(data.split(''));
    return doOtherThingPromise();
})
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log('ops', error)); */