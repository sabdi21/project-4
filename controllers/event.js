let router = require('express').Router()
let db = require('../models')
let mongoose = require('mongoose')
let moment = require('moment')

// GET - retrieve all events 
router.get('/', (req, res) => {
    console.log('GET', req.headers)
    // console.log(req.user._id)
    // console.log('this', req.params)
    // console.log('this is the ', req.params)
    db.Event.find()
    // populate('events')
    .then(events => {
        res.send(events)
    }).catch(err => {
        console.log('GET err', err)
    })
})

// POST - create new event
router.post('/', (req, res) => {

    let date = req.body.date
    db.Event.create({
        eventname: req.body.eventname,
        location: req.body.location,
        date: moment(date).format("MMM Do YY"),
        time: req.body.time,
        description: req.body.description,
        user: req.user._id
    }).then(res => {
        res.send('this is getting sent back,', res)
    }).catch(err => {
        console.log('Post err', err)
    })
    
    
})



module.exports = router;