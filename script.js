
const materias = [
  {
    codigo: "BIO101",
    nombre: "Biología I",
    semestre: 1,
    requisitos: []
  },
  {
    codigo: "QUI101",
    nombre: "Química General",
    semestre: 1,
    requisitos: []
  },
  {
    codigo: "BIO102",
    nombre: "Biología II",
    semestre: 2,
    requisitos: ["BIO101"]
  },
  {
    codigo: "QUI102",
    nombre: "Química Orgánica",
    semestre: 2,
    requisitos: ["QUI101"]
  },
  {
    codigo: "BIO201",
    nombre: "Anatomía Humana",
    semestre: 3,
    requisitos: ["BIO102"]
  },
  {
    codigo: "FIS101",
    nombre: "Física Médica",
    semestre: 3,
    requisitos: ["QUI102"]
  },
  {
    codigo: "BIO301",
    nombre: "Fisiología",
    semestre: 4,
    requisitos: ["BIO201", "FIS101"]
  }
];

const estadoMaterias = {};

function puedeDesbloquear(materia) {
  return materia.requisitos.every(req => estadoMaterias[req]);
}

function crearTarjetaMateria(materia) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.id = materia.codigo;

  const titulo = document.createElement("h3");
  titulo.textContent = materia.nombre;
  card.appendChild(titulo);

  if (!puedeDesbloquear(materia)) {
    card.style.opacity = "0.4";
    card.style.pointerEvents = "none";
  }

  card.addEventListener("click", () => {
    card.classList.toggle("aprobada");
    estadoMaterias[materia.codigo] = card.classList.contains("aprobada");
    actualizarMalla();
  });

  return card;
}

function actualizarMalla() {
  const contenedor = document.getElementById("semestres");
  contenedor.innerHTML = "";
  materias.forEach((materia) => {
    const card = crearTarjetaMateria(materia);
    contenedor.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", actualizarMalla);
