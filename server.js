import express from "express";

const app = express();

// Root route
app.get("/", (req, res) => {
    res.send(`
        <html>
            <head>
                <meta charset="UTF-8" />
                <title>Hello</title>
                <style>
                    body {
                        background: #f0f0f0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        height: 100vh;
                        font-family: Arial, sans-serif;
                    }
                    h1 {
                        padding: 20px 40px;
                        background: white;
                        border-radius: 12px;
                        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
                        color: #333;
                    }
                </style>
            </head>
            <body>
                <h1>Hello World מעוצב</h1>
            </body>
        </html>
    `);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
