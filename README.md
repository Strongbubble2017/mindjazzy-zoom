<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Mindjazzy Zoom Meeting</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Font Awesome ikonok -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background: #f9f9f9;
      color: #333;
    }

    .hero {
      background: #f9f9f9;
      color: #1a1a1a;
      padding: 60px 20px;
      text-align: center;
    }

    .meeting-text {
      font-size: 28px;
      margin-top: 40px;
      margin-bottom: 10px;
      font-weight: bold;
      text-align: center;
      color: #3b2f2f;
    }

    .hero-image {
      max-width: 100%;
      height: auto;
      margin-top: 10px;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .countdown-timer {
      font-size: 24px;
      font-weight: bold;
      color: #3b2f2f;
      margin-top: 20px;
      text-align: center;
    }

    #footer-social {
      background: #f5deb3;
      text-align: center;
      padding: 40px 20px;
      margin-top: 60px;
      border-top: 2px solid #d2b48c;
    }

    #footer-social h2 {
      font-size: 24px;
      color: #3b2f2f;
      margin-bottom: 20px;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 20px;
      margin-top: 10px;
    }

    .social-links a {
      background: #DAA520;
      color: white;
      padding: 15px;
      border-radius: 50%;
      font-size: 24px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 50px;
      text-decoration: none;
      transition: background 0.3s, transform 0.2s;
    }

    .social-links a:hover {
      background: #b8860b;
      transform: scale(1.1);
    }
  </style>
</head>
<body>

  <section class="hero">
    <h1>Üdv a Mindjazzy Zoom meetingen</h1>
    <img src="https://i.imgur.com/qnK4d5L.jpg" alt="Zoom meeting" class="hero-image">
    <p class="meeting-text">A következő Zoom meeting ideje:</p>
    <div id="countdown" class="countdown-timer"></div>
  </section>

  <section id="footer-social">
    <h2>Kövess minket!</h2>
    <div class="social-links">
      <a href="https://facebook.com" target="_blank"><i class="fab fa-facebook-f"></i></a>
      <a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i></a>
      <a href="https://youtube.com" target="_blank"><i class="fab fa-youtube"></i></a>
      <a href="https://tiktok.com" target="_blank"><i class="fab fa-tiktok"></i></a>
    </div>
  </section>

  <script>
    const countdownDate = new Date("2025-03-31T23:59:59").getTime();
    const countdownElement = document.getElementById("countdown");

    const updateCountdown = setInterval(function () {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      if (distance < 0) {
        clearInterval(updateCountdown);
        countdownElement.innerHTML = "Lejárt az idő!";
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = days + " nap " + hours + " óra " + minutes + " perc " + seconds + " mp";
    }, 1000);
  </script>

</body>
</html>
