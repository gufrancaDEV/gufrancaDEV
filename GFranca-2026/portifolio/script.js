// Pequena interação visual no scroll
document.addEventListener("mousemove", (e) => {
  const glow = document.querySelector(".bg-glow");
  glow.style.transform = `translate(${e.clientX / 40}px, ${
    e.clientY / 40
  }px)`;
});
