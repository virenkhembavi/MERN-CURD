const UserData = require("../model/UserData")
const router = require("express").Router()


router.get('/', async (req, res) => {
    const response = await UserData.find({})
    // console.log(response)
    res.status(200).json(response)
})

module.exports = router