import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const myData =[`Michael`, `Sarah`, `Moshe`];
// Root route
app.get("/", (req, res) => {
    res.send(myData)
})
// Start server
app.listen(PORT, () => {
    console.log("Server running on port ", PORT);
});
