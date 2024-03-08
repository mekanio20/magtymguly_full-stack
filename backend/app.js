const cors = require('cors')
const express = require('express')
const path = require('path')

require('dotenv').config()
const app = express()
const port = process.env.PORT || 3001

require('./config/models')
const database = require('./config/database')
const router = require('./routers')

app.disable('x-powered-by')
app.use(cors({ origin: true }))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/uploads', express.static('public/uploads'))

app.use('/', router)
app.all('*', (req, res) => { return res.status(404).sendFile(`${path.join(__dirname + '/public/404.html')}`) })

app.listen(port, async () => {
    try {
        await database.authenticate()
        await database.sync({})
        console.log('Database connected...')
        console.log(`Server is running: http://localhost:${port}`)
    } catch (error) {
        throw error
    }
})