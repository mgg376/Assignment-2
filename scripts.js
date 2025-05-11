function injectImage() {
  const img = document.createElement("img");
  img.src = "./images/freddy.jpg";
  img.alt = "freddy";
  appendImage(img);
}

function injectImage2() {
  const img = document.createElement("img");
  img.src = "./images/fay.jpg";
  img.alt = "fay";
  appendImage(img);
}

function injectImage3() {
  const img = document.createElement("img");
  img.src = "./images/lola.jpg";
  img.alt = "lola";
  appendImage(img);
}

function injectImage4() {
  const img = document.createElement("img");
  img.src = "./images/rd.jpg";
  img.alt = "rd";
  appendImage(img);
}

function appendImage(img) {
  img.style.width = "100%";
  img.style.maxWidth = "600px";
  const container = document.getElementById("right-panel");
  container.innerHTML = "";
  container.appendChild(img);
}
