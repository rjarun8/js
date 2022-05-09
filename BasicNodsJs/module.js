

function square(n){
return n**2
}

function cube(n){
return n**3
}

export function addNum(a,b){
    return a+b
}


export function power4(n){
    return n**4;
}
//export default square 

//or

export {
    square,
    cube as cubeone
}