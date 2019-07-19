// Importing movies JSON object
const movies = require('./movies.json')

let id = 7

module.exports = {
    // Show entire movie array
    getAll(req, res) {
        res.status(200).send(movies)
    },
    // Delete movie from array
    delete(req, res) {
        const { id } = req.params
        const index = movies.findIndex(element => (
            element.id === +id
        ))
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    // Add a movie to the array
    add(req, res) {
        movies.push({ ...req.body, id })
        id++
        res.status(200).send(movies)
    },
    // Edit any movie info in the array
    edit(req, res) {
        const { id } = req.params
        const index = movies.findIndex(element => (
            element.id === +id
        ))
        movies[index] = {...movies[index], ...req.body}
        res.status(200).send(movies)
    }
}