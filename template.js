const ejs = require('ejs');
const fs = require('fs');
const http = require('http');
const filename = 'C:\Users\CB66936\myapp\tem\data.ejs';
const students = [
    { name: 'Rahul', age: 22 },
    { name: 'Rjan', age: 23 },
    { name: 'varun', age: 24 }
];
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(filename, (err, data) => {
            const template = data.toString();
            const context = { data: data };
            const output = ejs.render(template, context);
            res.setHeader('content-type', 'text/html');
            res.end(output);
        });
    } else {
        res.statusCode = 404;
        res.end('Not found');
    }
});
server.listen(8000, () => console.log('running...'));