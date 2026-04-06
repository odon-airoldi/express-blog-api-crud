const express = require('express')
const router = express.Router()

// importo data
const posts = require('../data/posts')



// index
router.get('/', (req, res) => {
    res.json({ posts });
});

// show
router.get('/:id', (req, res) => {

    const id = req.params.id

    const resPostById = posts.find(post => post.id == id)

    res.send(resPostById)

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

    const id = req.params.id

    const index = posts.findIndex(post => post.id == id)

    posts.splice(index, 1)

    res.send(posts)

})

module.exports = router