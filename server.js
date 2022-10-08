let express = require('express')

app = express()

app.get("/", (req,res) => {
    //~ res.json( {msg: "Hello Express"} )
    res.end( "<h1>Hello Express</h1>" )
})

let PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(" ==> port:", PORT)
})

