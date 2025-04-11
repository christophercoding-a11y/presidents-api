const express = require('express')
const router = express.Router()
const axios = require('axios')

let count
axios.get('https://api.sampleapis.com/presidents/presidents')
.then(res => count = res.data.length)

router.get('/', (req, res)=>{
    const url = 'https://api.sampleapis.com/presidents/presidents'

    axios.get(url).then(response => {
        res.render('pages/presidents', {
            title: "President's",
            name: "All US President's",
            data: response.data,
            path: 'president'
        })
    })
})

router.get('/:id', (req, res)=> {
    const id = req.params.id

    const url = `https://api.sampleapis.com/presidents/presidents/${id}`

    axios.get(url).then(resp => {

        const data = resp.data
        res.render('pages/presidentSingle', {
            title: data.title,
            name: data.name,
            data: data,
            path: 'presidents',
            count
        })
    })
})


module.exports = router

