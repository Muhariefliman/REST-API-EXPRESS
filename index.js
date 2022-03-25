import bodyParser from "body-parser";
import express  from "express";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5000;

app.listen(PORT, ()=> console.log("Server Running on Port: ", PORT));

app.use(bodyParser.json());

app.use('/users', usersRoutes);