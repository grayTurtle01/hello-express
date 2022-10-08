let express = require('express')

app = express()

app.get("/", (req,res) => {
    res.end("Hello Express")
})

let PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(" ==> port:", PORT)
})
