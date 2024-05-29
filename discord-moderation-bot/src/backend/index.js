const express = require('express');
const moderationRoutes = require('./api/moderationRoutes');
const userRoutes = require('./api/userRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/moderation', moderationRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});