const cors = require('cors')
const express = require('express');
const app = express();
const routes = require('./routes')
require('./src/database')

app.use(express.json())
app.use(cors())
app.use(routes)

console.log('Servidor Online!!!');
app.listen(3333)