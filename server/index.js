const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const dotenv = require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const cors = require("cors");
const connectDB = require("../server/config/db");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// connect to DB
connectDB();

app.listen(port, () => {
  console.log(`Server started at ${port}`);
});
