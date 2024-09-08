// app.js
const express = require('express');
const app = express();
const sessionRoutes = require('./routes/sessionRoutes');
const checklistRoutes = require('./routes/checklistRoutes');

app.use(express.json());

// Routes
app.use('/sessions', sessionRoutes);
app.use('/checklists', checklistRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
