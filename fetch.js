fetch('/data.json')
.then(responseStream => {
    if(responseStream.status === 200) {
        return responseStream.json();
    }else {
        throw new Error('request error')
    }
})
.then(data => {console.log(data);
})
.catch(err => {
    console.log('Error', err)
});