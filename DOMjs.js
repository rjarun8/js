const button = document.querySelector("button");

button.onclick= ()=>{
    button.innerText="Clicked";
    button.innerHTML="<p>html tah</p>";

    const h1 = document.createElement("hi");
    h1.innerText = "new h1 element";
    document.body.appendChild(h1);
    button.append(h1);
    button.prepend(h1 , 'text appended');// mutiple values
    button.remove();
    h1.remove();
}

//events

const button = document.querySelector("button")

button.addEventListener('click',alertme,{once:true});

function alertme(){
    alert("button ckicked")
}

button.addEventListener('click',generateRandomNum,{once:true});

function generateRandomNum(){
    button.innerText = "Random number is "+ Math.random()
}

//event bubbling


const button = document.querySelector("button")
const body = document.querySelector("body")
const head = document.querySelector("head")

button.addEventListener('click',alertme);
body.addEventListener('click',alertmeb);
head.addEventListener('click',alertmeh);

function alertme(){
    alert("button ckicked")
}

function alertmeb(){
    alert("button ckicked - body")
}

function alertmeh(){
    alert("button ckicked - head")
}
///////////////////////////////////////////////////////


const button = document.querySelector("button")
const bbody = document.querySelector("body")
const hhead = document.querySelector("head")

button.addEventListener('click',alertme,true);
body.addEventListener('click',alertmeb,true);
head.addEventListener('click',alertmeh,true);

function alertme(){
    alert("button ckicked")
}

function alertmeb(){
    alert("button ckicked - body")
}

function alertmeh(){
    alert("button ckicked - head")
}
//////////////////////////////////////////////////////////

const button = document.querySelector("button")
const bbbody = document.querySelector("body")
const hhhead = document.querySelector("head")

button.addEventListener('click',alertme);
body.addEventListener('click',alertmeb);
head.addEventListener('click',alertmeh);

function alertme(event){
   event.stopPropagation()
   button.style.display='none';
}

function alertmeb(){
    button.style.display='block';
}

////////////////////////////////////////////////////////
button.addEventListener('click',alertme,{capture:true,once:true});
/////////////////////////////////////////////////////////

button.addEventListener('click',changetext,true);
button1.addEventListener('click',stopListener);
function changetext(){
    button.innerText=math.random()
}

function stopEvent(){

    button.removeEventListener('click',changetext,true);

}
/////////////////////////////////////////////////////////////
const input = document.querySelector('input')
const h11=document.querySelector('h1');
input.addEventListener('keydown', keyHandler)
function keyHandler(event){

    event.preventDefault()
    h1.innerText=Math.random()

}

//////////////////////////////////////////////////////////////////
const objdict = {
    'something': { 'like':{ 'that':this},'somethingelse': true,},
    'anotherprop':100
}

