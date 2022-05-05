
function promiseSetTimeout(){
    return new Promise((resolve, reject)=>{
        setTimeout (() => {
    resolve()
}, 100)
    })}

promiseSetTimeout().then(()=>{
    console.log('statement3');
    return promiseSetTimeout()
}).then(()=> {
    console.log('statement4');
    return promiseSetTimeout()
})

//Does not wait for completion
async function boot(){
    promiseSetTimeout();//returns yet another promise
    console.log('async');
}

boot();

//waits for completion
async function bootWait(){
    await promiseSetTimeout();//promise resolved
    console.log('async_await');
}
bootWait();