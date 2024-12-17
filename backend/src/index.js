import express from "express";
import bodyParser from "body-parser";
import cors from 'cors'
import dotenv from 'dotenv';
dotenv.config();

import sql from "./db.js";
import authRoutes from "./routes/auth.js";
import weatherRoutes from "./routes/weather.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  try {
    res.send('Hello World!');
  } catch (error) {
    console.log(error)
  }
});


app.use('/api/auth', authRoutes);
app.use('/api/weather', weatherRoutes);

const PORT = process.env.PORT || 5000;

(async () => {
    await sql.sync()
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    })
})();
