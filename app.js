const express = require('express');
const validators = require('./middleware/validator.middleware');

const app = express();

app.use(express.json());

app.post("/register", validators.registerValidationRules, (req, res) => {
    const { username, email, password } = req.body;
    // Process the registration logic here
    res.json({ message: "User registered successfully" ,user:{ username,email}

    });


})
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

