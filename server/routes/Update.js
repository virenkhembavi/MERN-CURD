const UserData = require("../model/UserData")
const router = require("express").Router()


router.put('/', async (req, res) => {

    const filter = { _id: req.body._id }

    const update = await {
        name: req.body.name,
        age: req.body.age,
        city: req.body.city,
        country: req.body.country,
    }

    let response = await UserData.findOneAndUpdate(filter, update)
    // console.log(response + "update")
    res.status(200).json(req.body)
})

module.exports = router