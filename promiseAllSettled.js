async function promSetAll(){
    const promiseSettleAll = Promise.allSettled([req1,req2,req3])
    
    const responses = await promiseSettleAll
    
    
    const successRequests = responses.filter(response =>{
        return response.status=="fulfilled"}).map(resp=> resp.value)
    
        const json = await Promise.all(successRequests.map(t => t.json()))
        console.log(json)
    
    }
    
    promSetAll()


    async function fn(...promises) {
        // resolve them all
        // add one to all of them
        const promiseAll = await Promise.allSettled(promises)
        return promiseAll.map(p=>{
            if(p.status==="fulfilled"){
                return p.value *2;}
                else{
                    return null;
                }
        })
    }
    
    module.exports = fn
    