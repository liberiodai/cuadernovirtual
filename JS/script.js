const cards = document.querySelectorAll(".card");

/* FUNCIONAMIENTO DEL ACORDEÓN */
cards.forEach(card => {
  const titulo = card.querySelector(".titulo");
  const contenido = card.querySelector(".contenido");

  titulo.addEventListener("click", () => {

    if (card.classList.contains("active")) {
      contenido.style.maxHeight = null;
      card.classList.remove("active");
    } else {
      contenido.style.maxHeight = contenido.scrollHeight + "px";
      card.classList.add("active");
    }

  });
});

/* 🔗 MENÚ QUE TAMBIÉN ABRE */
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", () => {
    const id = link.getAttribute("href").substring(1);
    const section = document.getElementById(id);

    if (section) {
      const contenido = section.querySelector(".contenido");

      if (contenido) {
        section.classList.add("active");
        contenido.style.maxHeight = contenido.scrollHeight + "px";
      }
    }
  });
});