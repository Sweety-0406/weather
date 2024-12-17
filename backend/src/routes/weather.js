import express from "express"
import auth from "../middleware/auth.js";
import { searchWeather, allSearches } from "../controllers/weatherController.js"

const router = express.Router();

router.get("/:city", auth, searchWeather )
router.get("/", auth, allSearches)

export default  router