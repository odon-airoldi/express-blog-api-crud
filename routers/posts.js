const express = require('express')
const router = express.Router()


// index
router.get('/', (req, res) => {
    res.json({ posts });
});

// show
router.get('/:id', (req, res) => {
    res.send('dettaglio post' + req.params.id)
});

//store
router.post('/', (req, res) => {
    res.send('creazione')
});

//update
router.put('/:id', (req, res) => {
    res.send('modifica' + req.params.id)
})

// modify
router.patch('/:id', (req, res) => {
    res.send('modifica parziale' + req.params.id)
})

// destroy
router.delete('/:id', (req, res) => {
    res.send('elimina del post' + req.params.id)
})

module.exports = router