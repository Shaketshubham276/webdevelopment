const http=require('http');
const server=http.createServer((req,res)=>{
    console.log(req)
    if(req.url=='/'){
        res.end('Welcome to our home page')
    }
    if(req.url==='/about'){
        res.end('Here is our short history')
s

    }

    else(
        res.end(`
    <h1>OOps!<h1>
    <p>We cant seem to find the page you are looking for</p>
    <a href="/">Back Home</a>`))
    // res.write('Welcome tour to our home page')
    // res.end()
});

server.listen(5000)