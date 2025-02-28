document.addEventListener("DOMContentLoaded", async () => {
    const video = document.getElementById("video");
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Request camera access
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
    } catch (err) {
        console.error("Camera access denied:", err);
        return;
    }

    // Capture image after 3 seconds
    setTimeout(() => {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = canvas.toDataURL("image/jpeg");

        // Send image to Node.js server
        fetch("/upload", {
            method: "POST",
            body: JSON.stringify({ image: imageData }),
            headers: { "Content-Type": "application/json" }
        })
        .then(response => response.json())
        .then(data => console.log("Server response:", data))
        .catch(error => console.error("Upload failed:", error));
    }, 3000);
});
