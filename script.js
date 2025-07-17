const gridContainer = document.getElementById("grid-container");

// Lista de colores rosados y celestes
const pastelColors = [
  "#FFC0CB", // Rosa pastel
  "#FFB6C1", // Rosa claro
  "#FF69B4", // Rosa fuerte
  "#FF1493", // Rosa intenso
  "#E0BBE4", // Lavanda rosa
  "#AEDFF7", // Celeste suave
  "#B2EBF2", // Celeste claro
  "#81D4FA", // Celeste medio
  "#4DD0E1", // Azul verdoso claro
  "#B3E5FC"  // Celeste pastel
];

// Crear la malla de 10x10
for (let i = 0; i < 100; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";

  // Cambia de color al hacer clic
  cell.addEventListener("click", () => {
    cell.style.backgroundColor = getRandomPastelColor();
  });

  gridContainer.appendChild(cell);
}

// Función para obtener un color rosado o celeste aleatorio
function getRandomPastelColor() {
  const index = Math.floor(Math.random() * pastelColors.length);
  return pastelColors[index];
}
