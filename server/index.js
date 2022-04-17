const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const UserData = require('./model/UserData');
const create = require('./routes/AllRoutes')
const get = require('./routes/GetData')
const update = require('./routes/Update')
const deletes = require('./routes/DeleteData')

const app = express();
const PORT = 8080


app.use(cors())
app.use(express.json())
// cluster URL
const URI = 'mongodb+srv://mernproject:happy31@cluster0.2gvdu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(
    URI, () => console.log("DB CONNECTED")
)

// API

app.use("/create", create)
app.use('/get', get)
app.use('/update', update)
app.use('/delete', deletes)


app.get("/", async (req, res) => {
    res.send('WE GOT RESPONSE')
})
app.listen(PORT || 8080, (() => console.log(`port is running on : ${PORT}`)))