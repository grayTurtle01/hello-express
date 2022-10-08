let express = require('express')

app = express()

app.get("/", (req,res) => {
    res.json( {msg: "Hello Express"} )
})

let PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(" ==> port:", PORT)
})
