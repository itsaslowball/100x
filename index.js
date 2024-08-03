const express = require('express');

const app = express();

app.use(express.json());
//this is a middleware that will parse the incoming request body and convert it to JSON

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("Your kidneys are " + kidneyLength + " long");
});

// Global error handler
app.use((error, request, response, next) => {
    console.error(error.stack);
    response.status(500).json({
        msg: "Something went wrong"
    });
});

app.listen(3000, () => {
    console.log('Server started at port 3000');
});
