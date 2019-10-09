const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'maydenDec2019';
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true});

client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  db.collection('kingsOfTheNodeWorld').insert(
    {
    name: 'Rhymes',
    age: 42,
    kingLevel: 1000000
  }, (err, data) => {
    if (err) {
      console.log(err);
      throw new Error(err)
    } else {
      console.log(data);
      return client.close();
    }
  });
});