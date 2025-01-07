const express = require('express');
const router = express.Router();

// Data JSON untuk halaman About
const aboutData = {
    name: "andrean valdy",
    profession: "Web Developer",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
};

// GET /about - Halaman About
router.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <link rel="stylesheet" href="/style.css">
                <title>About</title>
            </head>
            <body>
                <header>
                    <h1>About Me</h1>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                    </nav>
                </header>
                <div class="container">
                    <h2>${aboutData.name}</h2>
                    <p>${aboutData.profession}</p>
                    <h3>Skills:</h3>
                    <ul>
                        ${aboutData.skills.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                    <pre>${JSON.stringify(aboutData, null, 2)}</pre>
                </div>
            </body>
        </html>
    `);
});

module.exports = router;
