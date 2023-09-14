const express = require('express');
const app = express();
const PORT = 3004;

app.get('/api/teste', (request, response) => {
    response.send('Bora git hub');
});

app.listen(3004, () => console.log(`Running at port 3004 ${PORT}`));