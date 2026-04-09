// importazione express
const express = require('express')

// import router
const routersPosts = require('./routers/posts')

// import middlewares
const serverError = require('./middlewares/serverError')
const notFound = require('./middlewares/notFound')

// inizializzazione express e invocazione tramite funzione salvando il risultato in una variabile
const app = express()
const port = 3000

// assets public
app.use(express.static('public'));


// avvio server in ascolto sulla porta indicata (3000)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// definizione prima rotta
app.get('/', (req, res) => {
    error()
    res.send('Hello World!')
})

// register body-parser application/json
app.use(express.json())

// import routers
app.use('/posts/', routersPosts)

app.use(serverError)

app.use(notFound)

