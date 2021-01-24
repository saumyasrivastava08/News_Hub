const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT || 5000

//static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

app.set('views' , './src/views')
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: true }))

//routs
const newsRouter= require('./src/routers/news')
app.use('/',newsRouter)
app.use('/articles',newsRouter)

//Listen on port 5000
app.listen(port, () => console.log('Listening on port ${port}'))