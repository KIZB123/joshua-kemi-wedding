// Wedding date: 28 November 2026, 10:00 AM (Nigeria time, UTC+1)
const weddingDate = new Date("2026-11-28T10:00:00+01:00").getTime();
function updateCountdown() {
  const now = Date.now();
  const distance = weddingDate - now;
  if (distance <= 0) {
    document.querySelector(".countdown").innerHTML = "<p>Today is the day! Let the celebration begin.</p>";
    return;
  }
  const units = {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((distance / (1000 * 60)) % 60),
    seconds: Math.floor((distance / 1000) % 60)
  };
  Object.entries(units).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = String(value).padStart(2, "0");
  });
}
updateCountdown();
setInterval(updateCountdown, 1000);
