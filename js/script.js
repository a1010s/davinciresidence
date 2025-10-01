document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  const photos = ["img/beach.jpg", "img/terrace.jpg", "img/livingroom.jpg"];

  photos.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.style.width = "30%";
    img.style.margin = "10px";
    img.style.borderRadius = "8px";
    gallery.appendChild(img);
  });
});
