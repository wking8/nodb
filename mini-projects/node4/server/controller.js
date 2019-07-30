module.exports = {
    getPoints: (req, res, next) => {
        res.status(200).send('The Points')
        next()
    },
    login: (req, res) => {
        req.session.username = req.body.username
        res.status(200).send(req.session.username)
    }
}