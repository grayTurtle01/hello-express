let express = require('express')

app = express()

app.get("/", (req,res) => {
    //~ res.json( {msg: "Hello Render from Express"} )
    res.end( "<h1>Hello Express from Render II</h1>" )
})

let PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(" ==> port:", PORT)
})

