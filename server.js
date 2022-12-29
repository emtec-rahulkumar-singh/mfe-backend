
const express = require('express');
const cors = require('cors')

const app = express();

const port = 8080;

app.use(cors())
app.use(express.json());

const userRoutes = require("./src/routes/userRoute");
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log('Server started');
});