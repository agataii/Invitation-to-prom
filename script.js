const html = document.documentElement;

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function countdow() {
  const daysEL = document.getElementById("days");
  const hoursEL = document.getElementById("hours");
  const minEL = document.getElementById("min");
  const secsEL = document.getElementById("secs");

  const wedding = "2024-06-26T18:00:00"; // Указание точного времени для даты свадьбы
  const weddingDate = new Date(wedding);
  const currentDate = new Date();

  const totalSeconds = (weddingDate - currentDate) / 1000;

  if (totalSeconds < 0) {
    // Если время истекло, показываем нули
    daysEL.innerHTML = "00";
    hoursEL.innerHTML = "00";
    minEL.innerHTML = "00";
    secsEL.innerHTML = "00";
    return;
  }

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  daysEL.innerHTML = formatTime(days);
  hoursEL.innerHTML = formatTime(hours);
  minEL.innerHTML = formatTime(mins);
  secsEL.innerHTML = formatTime(seconds);
}

countdow();
setInterval(countdow, 1000);

function toogleMode() {
  html.classList.toggle("clicked");

  const button = document.getElementById("botao");
  if (html.classList.contains("clicked")) {
    button.textContent = "Жабу";
  } else {
    button.textContent = "Ашу";
  }
}

function copiarTexto() {
  const texto = document.getElementById("textocopy");
  const areaDeTextoTemp = document.createElement("textarea");
  areaDeTextoTemp.value = texto.innerText;
  document.body.appendChild(areaDeTextoTemp);
  areaDeTextoTemp.select();
  document.execCommand("copy");
  document.body.removeChild(areaDeTextoTemp);
  alert("Texto copiado: " + texto.innerText);
}
