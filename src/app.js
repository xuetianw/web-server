const path = require('path')
const express = require('express')
const fs = require('fs');

const app = express()

const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.listen(port, () => {
    console.log('Server is up on port .' + port)
})

app.get('/resume', (req, res) => {
    var data =fs.readFileSync(`${__dirname}/../resume/resume.pdf`);
    res.contentType("application/pdf");
    res.send(data);

})