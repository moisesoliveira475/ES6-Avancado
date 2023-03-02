const asyncTimer = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(12345);
        }, 100)
});
const simpleFunction = async () => {
    const data = await Promise.all([asyncTimer(),
    fetch('/data.json').then(resStream => resStream.json())
])
    return data;
};
simpleFunction().then(data => {
    console.log(data);
})
.catch(err => {
    console.log(err);
})
