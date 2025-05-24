import express from "express"
import userRoutes from "../../node_project_basic/routes/users"
import bodyParser from 'body-parser'

const app = express();
const port = 15513

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send("calling get method in express!")
})

app.listen(port, () => {
    console.log(`port is running on ${port}`);
    
})