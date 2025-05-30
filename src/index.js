import express from "express"
import bodyParser from 'body-parser'
import userRoutes from "../routes/users.js"

const app = express();
const port = 15511

app.use(bodyParser.json());
app.use('/users', userRoutes);


app.get('/', (req, res) => {
    res.send("calling get method in express!")
})

app.listen(port, () => {
    console.log(`port is running on ${port}`);
    
})