'use strict';

//Setup Express
const express = require('express');
const app = express();

//Setup GraphQL
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

//Setup App Files
const atlas = require('./app');


// GraphQL schema
var schema = buildSchema(atlas.schemas);

//GraphQL roots/resolvers
var root = atlas.resolver;

//Mount Entry Points...
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.use('/', (req, res) => {
  res.json('Go to /graphql to test your queries and mutations!');
});


app.set('port', process.env.PORT || 3000);
//app.use(express.static('public'))
//app.set('view engine', 'ejs');
app.listen(app.get('port'), () => {
  console.log('Atlas running in port: ', app.get('port'));
});
