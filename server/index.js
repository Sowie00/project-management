const express = require('express')
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql')
const schema = require('./schema/schema')
const port = process.env.PORT || 5000;
const app = express();
const colors = require('colors')
const cors = require('cors')
const db = require('./config/db');
const connectDB = require('./config/db');

//connect database
connectDB();

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'

}))

app.listen(port, () => {
    console.log(`Listening on server: ${port}`)
})