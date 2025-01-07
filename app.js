const express = require('express');
const app = express();
const port = 3000;

// Middleware untuk file statis (CSS, gambar, dll.)
app.use(express.static('public'));

// API Endpoint
app.get('/api/data', (req, res) => {
    const data = {
        message: "Hello, nama saya andrean valdy",
        status: "lajang",
        data: {
            name: "andrean valdy",
            profession: "Web Developer",
            skills: ["HTML", "CSS", "JavaScript", "Node.js"]
        }
    };
    res.json(data);  // Mengirimkan response dalam format JSON
});

// Router untuk halaman lainnya
const homeRouter = require('./routes/home');
const aboutRouter = require('./routes/about');

app.use('/', homeRouter);
app.use('/about', aboutRouter);

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
