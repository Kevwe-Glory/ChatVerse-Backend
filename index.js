import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose" 
import cors from "cors"
import postRoutes from './routes/posts.js'



const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors());

app.use('/api', postRoutes )
//mongodb+srv://dhivine4:<password>@cluster0.la2pfub.mongodb.net/
const CONNECTION_URL = 'mongodb+srv://ajishebiyawoglory:Glory100@cluster0.ifalmro.mongodb.net/'
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>app.listen(PORT, () => console.log(`server running on port: ${PORT}`))) 
.catch((error) => console.log(error.message))
