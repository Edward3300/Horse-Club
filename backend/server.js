const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors({
  origin: '*', 
  methods: ['*'], 
  allowedHeaders: ['*'],
}));

app.use(bodyParser.json());
app.use('/api', routes);
app.use(cors());



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});