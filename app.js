// importazione express
const express = require('express')

// import router
const routersPosts = require('./routers/posts')

// inizializzazione express e invocazione tramite funzione salvando il risultato in una variabile
const app = express()
const port = 3000

// assets public
app.use(express.static('public'));

// import routers
app.use('/posts/', routersPosts)

// definizione prima rotta
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// avvio server in ascolto sulla porta indicata (3000)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

