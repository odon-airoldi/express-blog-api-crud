// importo data
const posts = require('../data/posts')

// index
function index(req, res) {
    res.json({ posts });
};

// show
function show(req, res) {
    const id = req.params.id
    const resPostById = posts.find(post => post.id == id)
    res.send(resPostById)
};

//store
function store(req, res) {
    res.send('creazione')
}

//update
function put(req, res) {
    res.send('modifica' + req.params.id)
}

// modify
function patch(req, res) {
    res.send('modifica parziale' + req.params.id)
}

// delete
function destroy(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)

    posts.splice(posts.indexOf(post), 1)
    console.log(posts)

    res.sendStatus(204)

}


module.exports = {
    index,
    show,
    store,
    put,
    patch,
    destroy
} 