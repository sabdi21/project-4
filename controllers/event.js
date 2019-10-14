let router = require('express').Router()
let db = require('../models')
let mongoose = require('mongoose')
let moment = require('moment')

// GET - retrieve all events 
router.get('/', (req, res) => {
    console.log('GET', req.headers)
    db.Event.find()
    .then(events => {
        res.send(events)
    }).catch(err => {
        console.log('GET err', err)
    })
})

// // GET - retrieve a event by it's id
// router.get('/:id', (req,res) => {
//     // res.send('STUB - id route works')
//     db.Event.findOne({_id: req.params.id})
//     .then(myEvents => {
//         if(!myEvents) {
//             return res.status(404).send({message: 'Could not find. Try again later.'})
//         }
//         res.send({myEvents})
//     })
//     .catch(err => {
//         console.log(err)
//         res.send('Error accessing the database')
//     })
// })

// Get - get all user's events based on id
router.get('/search/:userId', (req, res) => {
    console.log('GET USER EVENTS', req.params)
    db.Event.find( {
        user: req.params.userId
    })
    .then(userEvents => {
        console.log('USER EVENTS', userEvents)
        res.send(userEvents)
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
    })
    // populate('user')
    .then(response => {
        res.status(200).send(response)
    }).catch(err => {
        console.log('Post err', err)
    })
 
})

// // POST - create new event
// router.post('/', (req, res) => {
//     let date = req.body.date
//     db.Event.create({
//         eventname: req.body.eventname,
//         location: req.body.location,
//         date: moment(date).format("MMM Do YY"),
//         time: req.body.time,
//         description: req.body.description,
//         user: req.user._id
//     }).then(res => {
//         res.send('this is getting sent back,', res)
//     }).catch(err => {
//         console.log('Post err', err)
//     })  
// })
//GET ROUTE FOR CURRENT USER EVENTS
router.get('/:id', (req, res) => {
    console.log('GET', req.headers)
    db.Event.findOne()
    // populate('events')
    .then(events => {
        res.send(events)
    }).catch(err => {
        console.log('GET err', err)
    })
})


// PUT/Update route for events
router.put('/:id', (req, res) => {
    db.Event.findOneAndUpdate({
        _id: req.params.id },
        req.body)
    .then(editedBounty => {
        res.send(editedEvent)
    })
    .catch(err => {
        console.log(err)
        res.status(503).send({message: 'Server Error'})
    })
})

//DELETE route for events
router.delete('/:id', (req,res) => {
    db.Event.findByIdAndDelete({_id: req.params.id})
    .then(() => {
        res.status(204).send()
    })
    .catch(err => {
        console.log('GET ERROR for current user', err)
        res.status(503).send({message: 'Server Error'})
    })
})

module.exports = router;