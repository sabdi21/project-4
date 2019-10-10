//required packages
let cors = require('cors')
let express = require('express');
let jwt = require('jsonwebtoken')
let morgan = require('morgan')
let rowdyLogger = require('rowdy-logger')
require('dotenv').config()
let expressJWT = require('express-jwt')

//initiate app
let app = express();
let rowdyResults = rowdyLogger.begin(app)

//middleware
app.use(express.urlencoded({ extended: false, limit: '50mb' }))
app.use(express.json({ limit: '10mb' }))
app.use(cors())
app.use(morgan('dev'))

//controllers//protects our back-end routes. not accessable unless token is provided
app.use('/auth',expressJWT({
    secret: process.env.JWT_SECRET
}).unless({
    path: [
        //even if you dont have a token/login-info these routes should be available
        {url: '/auth/login', methods: ['POST']},
        {url: '/auth/signup', methods: ['POST']} 
    ]
}), require('./controllers/auth'));

//protects the token in all routes
app.use('/event',expressJWT({
    secret: process.env.JWT_SECRET
}), require('./controllers/event'));
//should remove routes to specific end-

//routes
app.get('*', (req, res) => {
    res.status(404).send({ message: 'Not Found' })
})


//listening
app.listen(process.env.PORT || 3000, () => {
    console.log('Server started')
    rowdyResults.print()
})
