<script>
const countdownDate = new Date("2025-03-31T23:59:59").getTime();
const countdownElement = document.getElementById("countdown");

const updateCountdown = setInterval(function () {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance < 0) {
    clearInterval(updateCountdown);
    countdownElement.innerHTML = "A meeting elkezdődött!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days} nap ${hours} óra ${minutes} perc ${seconds} mp`;
}, 1000);
</script>

