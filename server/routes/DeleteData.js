const UserData = require("../model/UserData")
const router = require("express").Router()


router.post('/', async (req, res) => {

    const filter = { _id: req.body._id }


    let response = await UserData.deleteOne(filter)
    // console.log(response + "delete")
    res.status(200).json(req.body)
})

module.exports = router