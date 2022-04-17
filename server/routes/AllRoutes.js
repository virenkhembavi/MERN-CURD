const UserData = require("../model/UserData")
const router = require("express").Router()


router.post('/', async (req, res) => {
    const response = await new UserData({
        name: req.body.name,
        age: req.body.age,
        city: req.body.city,
        country: req.body.country,
    }).save()
    // console.log(response + "add")
    res.status(200).json(response)
})

module.exports = router