function injectImage() {
  const img = document.createElement("img");
  img.src = "https://images.pexels.com/photos/57416/cat-sweet-kitty-animals-57416.jpeg?cs=srgb&dl=pexels-pixabay-57416.jpg&fm=jpg";
  img.alt = "freddy";
  appendImage(img);
}

function injectImage2() {
  const img = document.createElement("img");
  img.src = "https://t3.ftcdn.net/jpg/02/36/99/22/360_F_236992283_sNOxCVQeFLd5pdqaKGh8DRGMZy7P4XKm.jpg";
  img.alt = "fay";
  appendImage(img);
}

function injectImage3() {
  const img = document.createElement("img");
  img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg";
  img.alt = "lola";
  appendImage(img);
}

function injectImage4() {
  const img = document.createElement("img");
  img.src = "https://plus.unsplash.com/premium_photo-1673967831980-1d377baaded2?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D";
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
