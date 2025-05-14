const express = require('express')
const cors = require('cors')
const postRouter = require('./routes/post.routes')
const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())
app.use('/api', postRouter)


app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`)
})