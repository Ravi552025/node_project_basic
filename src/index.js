import express from "express"
import bodyParser from 'body-parser'
import userRoutes from "../routes/app.js"

const app = express();
const port = 15511

app.use(bodyParser.json());
app.use('/app', userRoutes);


app.get('/', (req, res) => {
    res.send("calling get method in express!")
})

app.listen(port, () => {
    console.log(`port is running on ${port}`);
    
})