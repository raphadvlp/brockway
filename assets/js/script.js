window.addEventListener("scroll", () => {
  const header = document.getElementById("header");
  const arrowTop = document.querySelector(".arrow-top");

  if (window.scrollY > 50) {
    // Quando rolar mais de 50px
    header.classList.add("fixed");
    arrowTop.style.display = "block";
  } else {
    header.classList.remove("fixed");
    arrowTop.style.display = "none";
  }
});

window.sr = ScrollReveal({ reset: true });

sr.reveal(".image", { duration: 1500 });

sr.reveal(".missoes-text", { duration: 1500 });

sr.reveal("#servicos", { duration: 1500 });

sr.reveal("#segmentos", { duration: 1500 });

sr.reveal("#formulario", { duration: 1500 });

sr.reveal(".text", { duration: 2000 });
