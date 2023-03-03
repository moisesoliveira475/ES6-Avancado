class CustomError extends Error {
    constructor({message, data}) {
        super(message);
        this.data = data;
    }
}

try{
    //console.log(nome);
    const nome = 'Moisés';
    

    const myError = new CustomError({
        message: 'Custom message on custom error',
        data: {
        type: 'Server error'
        }
});
    throw myError;

} catch (err) {
    if(err.data.type === 'Server error') {
        console.log('fazer algo caso seja esse erro')
    }else {
        console.log('hshshshh')
    }
    console.log('erro: ',err)
} finally {
    console.log('keep going...')
}


