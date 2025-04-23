function injectImage() {

  const img = document.createElement("img");
  img.src = "img.src = "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg;
  img.alt = "sample image";  
  img.style.width = "100%";
  img.style.maxWidth = "600px";

  const container = document.getElementById("right-panel");
  container.innerHTML = '';
  container.appendChild(img);
}

function injectImage2() {
  const img = document.createElement("img");
  img.src = "https://i.imgur.com/ect5aVG.jpg";
  img.alt = "sample image";
  img.style.width = "100%";
  img.style.maxWidth = "600px";

  const container = document.getElementById("right-panel");
  container.innerHTML = '';
  container.appendChild(img);
}

function injectImage3() {
  const img = document.createElement("img");
  img.src = "https://i.imgur.com/BMJb7AW.jpg";
  img.alt = "sample image";
  img.style.width = "100%";
  img.style.maxWidth = "600px";

  const container = document.getElementById("right-panel");
  container.innerHTML = '';
  container.appendChild(img);
}

function injectImage4() {
  const img = document.createElement("img");
  img.src = "https://i.imgur.com/UXBls0b.jpg";
  img.alt = "sample image";
  img.style.width = "100%";
  img.style.maxWidth = "600px";

  const container = document.getElementById("right-panel");
  container.innerHTML = '';
  container.appendChild(img);
}

function resizeImage() {
  let images = document.querySelectorAll("img");
  images.forEach(img => {
    if (img.alt === "sample image") {
      img.style.width = "200px";
      img.style.height = "auto";
    }
  });
}
