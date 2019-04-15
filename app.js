const express = require('express')
const app = express()
const port = 3000

app.engine('html', require('ejs').renderFile);
app.set('view engine','html');

app.use('/static', express.static('./static')) // serving static css styles

app.use('/dist', express.static('./dist')) // host files from webpack

app.get('/', (request, response) => response.send('App is running'))

app.get('/hello', require('./controllers/index'))

app.listen(port, () => console.log(`Listening on port ${port}`))
