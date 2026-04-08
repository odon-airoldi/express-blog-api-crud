// importo data
const posts = require('../data/posts')

// index
function index(req, res) {

    let filteredPosts = posts

    if (req.query.tag) {
        filteredPosts = posts.filter(post => post.tags.includes(req.query.tag))
    }

    res.send(filteredPosts)
};

// show
function show(req, res) {

    const id = parseInt(req.params.id)

    const resPostById = posts.find(post => post.id === id)

    if (!resPostById) {

        return res.status(404).json({
            status: '404',
            message: 'error'
        })
    }

    res.send(resPostById)

};

//store
function store(req, res) {

    const newPostid = posts[posts.length - 1].id + 1

    const newPost = {
        id: newPostid,
        titolo: req.body.titolo,
        contenuto: req.body.contenuto,
        immagine: req.body.immagine,
        tags: req.body.tags
    }

    posts.push(newPost)

    console.log(posts)

    res.status(201).json(newPost)
}

//update
function put(req, res) {

    const id = parseInt(req.params.id)

    const updPost = posts.find(post => post.id === id)

    if (!updPost) {

        return res.status(404).json({
            status: '404',
            message: 'not found'
        })

    }

    if (req.body.titolo) { updPost.titolo = req.body.titolo }
    if (req.body.contenuto) { updPost.contenuto = req.body.contenuto }
    if (req.body.immagine) { updPost.immagine = req.body.immagine }
    if (req.body.tags) { updPost.tags = req.body.tags }

    console.log(posts)

    res.status(201).json(updPost)
}

// modify
function patch(req, res) {
    res.send('modifica parziale' + req.params.id)
}

// delete
function destroy(req, res) {
    const id = parseInt(req.params.id)
    const post = posts.find(post => post.id === id)

    if (!post) {

        return res.status(404).json({
            status: '404',
            message: 'error'
        })
    }

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