const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors())

app.get("/doston/demo", (req, res) => {
    res.json({
        name: "Qodirov Doston",
        image: "https://miro.medium.com/max/1400/1*mYTQe3aP6IxOVqFiy2C6qw.jpeg",
        username: "Doston",
        email: "qodirovdoston806@gmail.com"
    })
});

app.get("/", (req, res) => {
    res.send({
        message: "Hello I'm Doston"
    })
});


const PORT = 3000;
app.listen(PORT, () => {
    
    console.log(`Server has been working on http://localhost:${PORT}`);
})