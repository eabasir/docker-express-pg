const express = require('express');
const server = express();
const PORT = 3000;
const pg = require('pg');
var pool = new pg.Pool()
pool.connect('postgres://postgres:eabasir@localhost:5432/express_pg_db');
server.listen(PORT, () => console.log(`Server running on ${PORT}`));
server.get('/', (req, res) => res.status(200).send('hello'));
