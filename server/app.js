const express = require('express');
const graphqlHTTP = require('epress-graphql');
const app = express();

app.listen(4000, () => {
  console.log('listen 4000');
})