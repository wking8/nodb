
module.exports = {
    getClass: async (req, res) => {
        const db = req.app.get('db')
        const classList = await db.get_class()
        res.status(200).send(classList)
    },
    updateClassMate: async (req, res) => {
        const db = req.app.get('db')
        const { phone, address, name } = req.body
        const { id } = req.params
        const updatedMate = await db.update_classmate({ phone, address, name, id })
        res.status(200).send(updatedMate)
    },
    addMate: (req, res) => {
        const db = req.app.get('db')
        const { phone, address, name } = req.body
        db.add_mate([name, phone, address])
            .then(result => {
                res.status(200).send(result)
            })
    },
    deleteMate: (req, res) => {
        const db = req.app.get('db')
        db.delete_mate([req.params.id])
            .then(result => {
                res.status(200).send(result)
            })
    }
}