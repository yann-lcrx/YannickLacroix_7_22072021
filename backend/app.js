const express = require('express');
const helmet = require('helmet');

const app = express();

const postRoutes = require('./routes/postRoutes');
const replyRoutes = require('./routes/replyRoutes')
const userRoutes = require('./routes/userRoutes');

const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 120 // max requests per windowMs
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(helmet());
app.use(express.json());
app.use(limiter);

app.use('/api/posts', postRoutes);
app.use('/api/replies', replyRoutes);
app.use('/api/auth', userRoutes);

module.exports = app;