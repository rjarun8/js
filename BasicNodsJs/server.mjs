import http from 'http'

const server = http.createServer((req,res)=>{
    res.write("success response from server!");
    res.end();
})
console.log('port :', process.env.PUBLIC_PORT)
server.listen(process.env.PUBLIC_PORT , () =>{
    console.log("hey incoming!");
})