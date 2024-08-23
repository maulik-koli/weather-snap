const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
const port = 3000

app.get('/', (req, res) => {
    res.send("I am just aguy who is hero for fun")
})

app.get('/weather', (req, res) => {
    const { address } = req.query.address
    res.send("haiii okay")
})

app.get('/test', (req, res) => {
    res.send({
        forcast : "boobs"
    })
})

app.listen(port, () => {
    console.log("runnig..." , port)
})