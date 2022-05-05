const promises = fetch('./data.json')
promise.then(response=>{
const promiseResp = response.json()
promiseResp.then(data=>console.log(data))    
})


const b = ()=> 1+1

console.log(b())

console.log(promise)

function getPromise(){
    return fetch('./dataaa.json');
}


const trackPromise = getPromise()

function getPromiseResp(trackPromise){
    return trackPromise.then(resp =>{
        console.log(resp);
        return resp;
    })
}

trackPromise.then(resp => {
    console.log(resp)
})
const c_promise_resp = getPromiseResp(trackPromise)

// console.log(c_promise_resp)
// console.log('track Promise :', trackPromise)


trackPromise.catch(error => {
    console.log("promise failed" , error)
})

function getMeAPromise(){
    return fetch('./data.json');
}

const promise = getMeAPromise();

promise.then((data) => {
    return data.json();
    }).then(data2 =>{
        console.log(data2)
        throw ("oops new");
        return data2;
    }).catch(error =>{
        console.log(error + ' catch');
    });


const timer = document.querySelector('#time span');



function promiseSetTimeout(){
    return new Promise((resolve, reject)=>{
        setTimeout (() => {
    timer.innerText='Hello Promise!'
}, 1000)
    // resolve("text written to screen");
    reject("promise intentionally rejected");

    })
}

promiseSetTimeout().then(resp =>{
    console.log(resp);
}).catch(resp =>{

    console.log(resp);
})


function calculator(num1, num2, operation) {
	// return a Promise
    let result;
    switch(operation){
    case '+':
    return new Promise((resolve,reject)=>{
        result=num1+num2;
        resolve(result) ;
    });
    break;
    case '-':
    return new Promise((resolve,reject)=>{
        result=num1-num2;
        resolve(result) ;
    });
    break;
    default:
    return new Promise((resolve,reject)=>{
        
        reject('error') ;
    });
    
    }

}