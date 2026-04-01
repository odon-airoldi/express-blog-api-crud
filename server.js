// importazione express
const express = require('express')

// inizializzazione express e invocazione tramite funzione salvando il risultato in una variabile
const app = express()
const port = 3000

// definizione prima rotta
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// avvio server in ascolto sulla porta indicata (3000)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

