// write your code here
const http = require('http');

const server = http.createServer((req,resp)=>{
    resp.writeHead(418, {'Content-Type': 'text/plain'});
	resp.write('YOLO');
    resp.end();
})


server.listen(process.env.PUBLIC_PORT , () =>{
    console.log('started')
})