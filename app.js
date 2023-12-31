require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { shopRoutes } = require('./routes/shopRoutes');
const app = express();
// const { logger } = require('./middleware/logger');
const PORT = 4001 || process.env.PORT;

// Middleware
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middleware buatan sendiri
// app.use(logger)

// Routes
const apiRouter = express.Router();
app.use('/', apiRouter);

// /api/users
apiRouter.use('/shop', shopRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});


app.listen(PORT, () => console.log('Server ready on port:', PORT));
