const http = require('http')
const fs = require('fs')
const PORT = process.env.PORT

const server = http.createServer((req, res) => {
    const handleReadFile = (fileDirectory, statusCode, req, res) => {
        fs.readFile(fileDirectory, (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.writeHead(statusCode, { 'Content-Type': 'text/html' })
                res.write(data)
            }
        })
    }
    

    if (req.url === '/') {
        handleReadFile('./views/index.html', 200, req, res)
    }
    else if (req.url === '/about') {
        handleReadFile('./views/about.html', 200, req, res)
    }
    else if (req.url === '/contact') {
        handleReadFile('./views/contact.html', 200, req, res)
    }
    else {
        handleReadFile('./views/404.html', 404, req, res)
    }
})

server.listen(PORT, () => {
    console.log(`server is running`)
})