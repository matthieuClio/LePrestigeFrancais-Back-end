// Express
import express from 'express';

const app = express();

app.use(express.json()); // Parse the body
app.use(express.urlencoded({ extended: true}));

// Default route
app.get('/health', (req, res) => {
    res.json({
        status: 'ok'
    });
});

export default app;