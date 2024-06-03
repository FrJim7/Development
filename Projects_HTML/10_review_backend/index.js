// __INDEX_JS__
// __Francisco_Jimenez_Garcia_2024__

import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviews_dao.js"

import app from "./server.js"

/* Setup the Database data using MongoDB */
const kMongoClient = mongodb.MongoClient;
const kMongoUserName = "tempgenshin10";
const kMongoPassword = "6vx1gqTXPFD3uuk7";

const uri = `mongodb+srv://${kMongoUserName}:${kMongoPassword}@moviereviewdb.bomq5ei.mongodb.net/?retryWrites=true&w=majority&appName=MovieReviewDB`;
const port = 8000;

/* Creating a Conection to the DB */
kMongoClient.connect(
  /* Attempt */
  uri,
  {
    maxPoolSize: 50,
    wtimeoutMS: 2500,
    useNewUrlParser: true
  }) /* Error Catching, if any, earlier exit */
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  }) /* Sending the DB Client to our DB handler */
  .then(async client => {
    await ReviewsDAO.injectDB(client);
    /* Send a listen and loggin the result for control */
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    })
  });