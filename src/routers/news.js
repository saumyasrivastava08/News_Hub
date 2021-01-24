const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('', async(req, res) => {
   // res.render('news')

   try{
    const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=536054c5dd824e69b00d5d7f7e6d7598`)
    res.render('news', { articles: newsAPI.data.articles })
   } catch (err) {
            if(err.response) {
                res.render('news', { articles: null })
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            } else if(err.requiest) {
                res.render('news', { articles: null })
                console.log(err.requiest)
            } else {
                res.render('news', { articles: null })
                console.log('Error' , err.message)
            }
            
   }
})

module.exports = newsRouter