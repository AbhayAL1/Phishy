# Phishy
I have created this project by getting inspired from this instagram reel : https://www.instagram.com/offensoacademy/reel/DGDOm4eyfQu/

NOTE : I created this just for fun and am sharing it with you to highlight how dangerous it is and how easy it is to make a fake website that tricks you into scanning a QR code, giving the hacker access to your camera.

This project is just a sample and most basic version of the attack—the real attack is far more dangerous than you think. An experienced hacker can easily trick you by creating an exact replica of a legitimate website. If you use this as a reference to create a phishing website and end up getting arrested or involved in a legal case, I am not responsible for it.

If you want to explore this further, put your creativity to work and experiment responsibly—understanding these techniques can help you strengthen security and stay ahead of potential threats.
 

## Installation  
1. Clone the repository:  
   ```bash
   git clone https://github.com/AbhayAL1/Phishy.git
   ```

   
## How To Use

After cloning or copying the code.
### 1️⃣ Start the Node.js Server  
Open a terminal and run:
```sh
node server.js
```
By default, it will run on port `5000` (or another port if specified in `process.env.PORT`).

---

### 2️⃣ Use Cloudflare Tunnel (You can use any of the tools free/paid)  
If you want to expose your local server to the internet securely, install and run Cloudflare Tunnel:
```sh
cloudflared tunnel --url http://localhost:5000
```
It will generate a public URL you can use to access your site from anywhere.

---

### 3️⃣ Generate a QR Code (Linux)  
If you need a QR code for your Cloudflare tunnel URL, run:
```sh
qrencode -o qrcode.png "https://your-cloudflare-url.com"
```
Then, view it with:
```sh
xdg-open qrcode.png
```

 Nb:There are already many built-in tools like CamPhish and ZPhisher that you can refer to as well.
