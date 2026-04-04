// importazione express
const express = require('express')

// inizializzazione express e invocazione tramite funzione salvando il risultato in una variabile
const app = express()
const port = 3000

// import router
const routersPosts = require('./routers/posts')


// public folder
app.use(express.static('public'));


// array posts
const posts = [
    {
        titolo: 'Benvenuto nel mio blog',
        contenuto: 'Questo è il primo post del mio blog Express!',
        immagine: '/images/post1.jpg',
        tags: ['introduzione', 'benvenuto']
    },
    {
        titolo: 'Node.js e Express',
        contenuto: 'Scopri come creare API REST con Express.',
        immagine: '/images/post2.jpg',
        tags: ['nodejs', 'express', 'api']
    },
    {
        titolo: 'Frontend vs Backend',
        contenuto: 'Differenze tra sviluppo frontend e backend.',
        immagine: '/images/post3.jpg',
        tags: ['frontend', 'backend', 'web']
    },
    {
        titolo: 'Consigli per JavaScript',
        contenuto: 'Ecco alcuni consigli utili per migliorare con JS.',
        immagine: '/images/post4.jpg',
        tags: ['javascript', 'tips']
    },
    {
        titolo: 'Imparare a programmare',
        contenuto: 'Le basi per iniziare a programmare da zero.',
        immagine: '/images/post5.jpg',
        tags: ['programmazione', 'iniziare']
    }
];

// asset statici
app.use(express.static('public'))

app.use('/posts/', routersPosts)


// definizione prima rotta
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// avvio server in ascolto sulla porta indicata (3000)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

