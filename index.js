const express = require('express');
const videoRouter = require('./routes/videos');
require('./database/mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/videos', videoRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
});