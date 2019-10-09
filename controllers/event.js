let router = require('express').Router()
let db = require('../models')
let mongoose = require('mongoose')


// POST - create new event
router.post('/new', (req, res) => {
    console.log(req.body)
    db.Event.create({
        eventname: req.body.eventname,
        location: req.body.location,
        date: req.body.date,
        time: req.body.time,
        description: req.body.description,
        user: mongoose.Types.ObjectId(req.body.userId),
    }, (err, newEvent) => {
        console.log('return from EVENT.CREATE', err, newEvent)
    } )
    
})

module.exports = router;