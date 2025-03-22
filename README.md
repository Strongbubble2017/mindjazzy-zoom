<!DOCTYPE html>
<html lang="hu">
<head>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap" rel="stylesheet"> 
  <meta charset="UTF-8">
  <title>Oldal címe</title>


  <style>
    body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background: #fff8dc;
  color: #333;
}

.hero {
  background: linear-gradient(135deg, #FFD700, #DAA520);
  color: white;
  padding: 60px 20px;
  text-align: center;
}

.cta, .countdown-timer {
  background: linear-gradient(135deg, #f6e27f, #e6c200);
  color: #3b2f2f;
  padding: 10px 20px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  margin-top: 20px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
}

.features {
  padding: 40px 20px;
  text-align: center;
  background: ##fff8dc;
}

.features h2 {
  color: #B8860B;
}

.features li {
  margin: 10px 0;
  font-size: 18px;
  color: #8B500;
}

#signup {
  padding: 40px 20px;
  background: #f5deb3;
  text-align: center;
}

form input {
  padding: 10px;
  width: 250px;
  margin-right: 10px;
  border: 2px solid #DAA520;
  border-radius: 5px;
}

form button {
  padding: 10px 20px;
  background: #DAA520;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}
body {
  color: #2f2f2f;
}

.hero {
  color: #1a1a1a;
}

.features h2,
.features li {
  color: #3b2f2f;
}

form input,
form button {
  color: #1a1a1a;
}

.countdown-timer {
  color:  font-family: 'Poppins', sans-serif;
  font-size: 82px;
  letter-spacing: 1px;;
}
.meeting-text {
  font-size: 48px;
  margin-top: 40px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
  color: #3b2f2f; /* sötétbarna */
}
.social-links {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
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
  transition: background 0.3s;
}

.social-links a:hover {
  background: #b8860b;
   transform: scale(1.1);
}

.hero-image {
  max-width: 100%;
  height: auto;
  margin-top: 0;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
#footer-social {
  background: #f5deb3; /* világos barna */
  padding: 40px 20px;
  text-align: center;
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
  <h1>Üdv a Mindjazzy Zoom meetingen</h1>
  <img src="..." class="hero-image">
  <div id="countdown" class="countdown-timer"></div>
  <div class="social-links">
    <a href="#"><i class="fab fa-facebook-f"></i></a>
    ...
  </div>

  <!-- JAVASCRIPT A BODY VÉGÉN -->
  <script>
    document.getElementsByTagName("h1")[0].style.fontSize = "6vw";
// Cél időpont (pl. március 31. 23:59:59)
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
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML =
    days + " nap " + hours + " óra " + minutes + " perc " + seconds + " mp";
}, 1000);
  </script>
</body>
</html>
