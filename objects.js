const obj = {
    'something': { 'like':{ 'that':'this'},'somethingelse': true,},
    'anotherprop':100
}

function iteraterateOver(obj){
    for (k in obj){
        //console.log(obj[k])
        const objVal = obj[k]
        if(typeof(objVal) ==='object'){
            console.log(typeof(objVal))
            iteraterateOver(objVal)
        }else{
           console.log(`${k} = ${objVal}`)
        }
    }
}



iteraterateOver(obj)

////////////////////////////////////////////////////

const arr2 = [1,2,3,4,5]

for (const a1 of arr2){
    console.log(a1);
}

///////////////////////////////////////////////////////


const arr1 = [1,2,3,4,5]

arr1[Symbol.iterator] = ()=>{
let len = arr1.length;
    return {
        next: () => ({
            value:arr1[len--],
            done: len < 0

        })
    }
}

for (i of arr1){
    console.log(i)
}

////////////////////////////////////////////////////////////
let range = (start,stop,stepper=1)=>{
    start-=stepper;
    return {
        [Symbol.iterator] : ()=>{
            return {
                next() {
                    start += stepper;
                    return{
                        value:start,
                        done: start >= stop
                    }
                }
            }
        }
    }
}

console.log('iterator ', [...range (1,10,stepper=1)])

///////////////////////////////////////////////////////////

function *generatorFn(){
    yield 1;
    yield 2;
    yield 3;
}

generatorFn()

function *genrange(start,stop,stepper=1){
    for(let i=start;i<=stop;i+=stepper){
        yield i;
    }
}
///////////////////////////////////////////////////