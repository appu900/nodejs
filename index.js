

const http = require('http');



const server = http.createServer((req,res)=>{
      res.writeHead(200,{
        'Conntent-Type':'text/html'
      })
      res.end("hello from sever");
})
const PORT = process.env.PORT || 5000;
server.listen(PORT,()=>{
    console.log(`server is running on 5000 port`)
})