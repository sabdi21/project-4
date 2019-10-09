let router = require('express').Router()
let db = require('../models')
require('dotenv').config()

let jwt = require('jsonwebtoken')
let expressJWT = require('express-jwt')

// route for searching all events
router.get('/', (req,res) => {
    // // res.send('You made it')
})
// route for specific event
router.get('/:id', (req,res) => {
    // res.send('STUB - id route works')
})
// creating an event
router.post('/new', (req,res) => {
    // res.send('STUB - SignUp a new event')

})
// route for updating an event
router.put('/:id', (req,res) => {

})

// route for deleting an event
router.delete('/:id', (req,res) => {

})


module.exports = router;