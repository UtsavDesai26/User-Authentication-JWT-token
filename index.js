const express = require('express')
require('./src/db/mongoose')
const userRouter = require('./src/router/user')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
