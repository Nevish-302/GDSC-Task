const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

app.use(bodyParser.urlencoded({extended : true}))
app.use(cookieParser())

//The cors command will be updated according to the requirements
//like app.use(cors({credentials : true, origin: 'https://goresume-ten.vercel.app', }))
app.use(cors())

//Use this for testing purposes
//const uri = 'mongodb://127.0.0.1:27017/test'
//mongoose.connect(uri, {useNewUrlParser : true})
mongoose.connect(process.env.URI, {useNewUrlParser : true})
const connection = mongoose.connection
connection.once('open', ()=>
{
    console.log('MongoDB has connected successfully')
})

//routes

const adminAuth = require('./routes/authAdmin')
const products = require('./routes/products')
const auth = require('./routes/auth')
const cart = require(`./routes/cart`)
const orders = require(`./routes/orders`)
const wishList = require('./routes/wishList')
const search = require(`./routes/search`)
const user = require('./routes/user')

//routing

app.use('/auth', auth)
app.use('/admin', adminAuth)
app.use('/admin/products', products)
app.use('/user', user)
app.use(`/user/cart`, cart)
app.use(`/user/orders`, orders)
app.use(`/user/wishlist`, wishList)
app.use(`/search`, search)

app.listen(5000, ()=>
{
    console.log("The server is listening on the port 5000")
})