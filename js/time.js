const time = document.querySelector(
  ".status-bar .status-bar__column:nth-child(2) span"
);

function nowTime() {
  const date = new Date();
  const hh = String(date.getHours()).padStart(2, 0);
  const mm = String(date.getMinutes()).padStart(2, 0);

  time.innerHTML = `${hh}:${mm}`;
}

nowTime();
setInterval(nowTime, 1000);
