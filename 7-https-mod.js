const http = require('http')
const server = http.createServer((req,res)=>{
   if (req.url==='/'){
    res.end('welcome to our page!')
   }
   if (req.url==='/about'){
    res.end('this is our page history')
   }
   res.end(`
    <h1>OOPs!!<h1>
    <p>can't find the page you are looking for</p>
    <a href="/">Home</a>
    `)
})
server.listen(5000)