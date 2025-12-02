import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const myData =[`Michael`, `Sarah`, `Moshe`];
// Root route
app.get("/", (req, res) => {
    res.send(myData)
})
// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
