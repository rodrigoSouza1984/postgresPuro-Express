import express from "express"
import proprietarioRoute from "./routes/proprietario.route.js"
import animalRoute from "./routes/animal.route.js"
import cors from "cors"

const app = express();
app.use(express.json())

app.use("/proprietario", proprietarioRoute);
app.use("/animal", animalRoute);
app.use(cors());

app.listen(3000, () => console.log('API Started'))