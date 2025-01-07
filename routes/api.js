const express = require('express');
const router = express.Router();

// API Endpoint untuk mendapatkan data
router.get('/data', (req, res) => {
    const data = {
        message: "Hello, this is your API!",
        status: "success",
        data: {
            name: "John Doe",
            profession: "Web Developer",
            skills: ["HTML", "CSS", "JavaScript", "Node.js"]
        }
    };
    res.json(data);  // Mengirimkan response dalam format JSON
});

module.exports = router;
