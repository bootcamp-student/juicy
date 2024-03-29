const dotenv = require('dotenv');
const express = require('express');

// Load env vars
dotenv.config({ path: `./config/config/.env`});

const app = express();

//

const PORT =  process.env.PORT || 3000;

app.listen(PORT,() => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
});

