const express = require('express')
const axios = require('axios')
const router = express.Router()

router.use(express.static('public'))

const presidentRoutes = require('./api/presidentRoutes')
router.use('/presidents', presidentRoutes)

router.get('/', (req, res)=> {
    let randomPresident = {}
    axios.get('https://api.sampleapis.com/presidents/presidents')
    .then(resp => {
        randomPresident = resp.data[Math.floor(Math.random()* resp.data.length)]
        res.render('pages/home', {
            title: "President's Home page",
            name: " US President's Website",
            president: randomPresident
        })
    })
})



module.exports = router