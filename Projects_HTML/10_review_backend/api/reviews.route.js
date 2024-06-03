// __REVIEWS_ROUTE_JS__
// __Francisco_Jimenez_Garcia_2024__

import express from "express"
import reviewsctrl from "./reviews.controller.js"

const kRouter = express.Router();

kRouter.route("/").get((req, result) => result.send("Hello World"));

export default kRouter;