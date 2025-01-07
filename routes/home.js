const express = require('express');
const router = express.Router();

// Data JSON untuk halaman Home
const homeData = {
    title: "hy my name is andrean valdy",
    description: "This is the home page displaying JSON data",
};

// GET / - Halaman Home
router.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <link rel="stylesheet" href="/style.css">
                <title>Home</title>
            </head>
            <body>
                <header>
                    <h1>My Website</h1>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                    </nav>
                </header>
                <div class="container">
                    <h2>${homeData.title}</h2>
                    <p>${homeData.description}</p>
                    <pre>${JSON.stringify(homeData, null, 2)}</pre>
                </div>
            </body>
        </html>
    `);
});

module.exports = router;
