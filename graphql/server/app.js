const express  = require('express');
const { graphqlHTTP } = require('express-graphql');
const mongoose = require('mongoose');
const schema = require('./schema/schema');

const app = express();

mongoose.connect('mongodb+srv://admin:kousuke2507@cluster0.zd5pb.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('db connected!');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log('listening port 4000');
});
