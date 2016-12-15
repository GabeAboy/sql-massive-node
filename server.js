var express = require('express');
var bodyParser = require('body-parser');
var massive = require('massive');
var cors = require('cors');

var port = 3000;
var conn = massive.connectSync({
  connectionString : "postgres://postgres:@localhost/products"
});
var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.set('db', conn);
var db = app.get('db');
var ctrl = require('./productCTRL')

app.get('/api/products', ctrl.read_products);
app.get('/api/product/:id', ctrl.read_product);
app.post('/api/product', ctrl.create_product);
app.put('/api/product/:productId',ctrl.update_product);
app.delete('/api/product/:productId',ctrl.delete_product);

app.listen(port, function() {
  console.log("Started server on port", port);
});
