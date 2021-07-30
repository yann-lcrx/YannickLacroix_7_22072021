const express       = require('express');
const helmet        = require('helmet');
const postRoutes    = require('./routes/postRoutes');
const rateLimit     = require("express-rate-limit");
const replyRoutes   = require('./routes/replyRoutes')
const userRoutes    = require('./routes/userRoutes');

const app     = express();
const limiter = rateLimit({
  max     : 120,            // max requests per windowMs
  windowMs: 15 * 60 * 1000  // 15 minutes
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

app.use('/api/auth',    userRoutes);
app.use('/api/posts',   postRoutes);
app.use('/api/replies', replyRoutes);

module.exports = app;