// script.js

// Paleta de colores
const colores = [
  "#F3BAB", "#F8D0C8", "#F9DDD8", "#A7B59E", "#799567", "#5B744B", "#35522B"
];

const malla = [
  {
    semestre: "1er Semestre",
    materias: [
      { nombre: "Anatomía I", codigo: "ANA101" },
      { nombre: "Histología I", codigo: "HIS101" },
      { nombre: "Biología Celular y Molecular", codigo: "BIO101" },
      { nombre: "Biofísica", codigo: "BIOF101" },
      { nombre: "Fundamentos de Medicina", codigo: "FUN101" },
      { nombre: "Salud Pública I", codigo: "SPUB101" }
    ]
  },
  {
    semestre: "2do Semestre",
    materias: [
      { nombre: "Anatomía II", codigo: "ANA102", prereq: ["ANA101"] },
      { nombre: "Histología II", codigo: "HIS102", prereq: ["HIS101"] },
      { nombre: "Bioquímica", codigo: "BIOQ101", prereq: ["BIO101"] },
      { nombre: "Fisiología I", codigo: "FIS101" },
      { nombre: "Psicología Médica", codigo: "PSM101" },
      { nombre: "Salud Pública II", codigo: "SPUB102", prereq: ["SPUB101"] }
    ]
  },
  {
    semestre: "3er Semestre",
    materias: [
      { nombre: "Fisiología II", codigo: "FIS102", prereq: ["FIS101"] },
      { nombre: "Microbiología I", codigo: "MIC101" },
      { nombre: "Parasitología", codigo: "PAR101" },
      { nombre: "Comunicación Clínica", codigo: "COM101" },
      { nombre: "Ética Médica", codigo: "ETI101" }
    ]
  },
  {
    semestre: "4to Semestre",
    materias: [
      { nombre: "Microbiología II", codigo: "MIC102", prereq: ["MIC101"] },
      { nombre: "Farmacología I", codigo: "FAR101" },
      { nombre: "Patología I", codigo: "PAT101" },
      { nombre: "Propedéutica Clínica", codigo: "PRO101" },
      { nombre: "Salud Pública III", codigo: "SPUB103" }
    ]
  },
  {
    semestre: "5to Semestre",
    materias: [
      { nombre: "Farmacología II", codigo: "FAR102", prereq: ["FAR101"] },
      { nombre: "Patología II", codigo: "PAT102", prereq: ["PAT101"] },
      { nombre: "Medicina Interna I", codigo: "MED101" },
      { nombre: "Cirugía I", codigo: "CIR101" },
      { nombre: "Pediatría I", codigo: "PED101" }
    ]
  },
  {
    semestre: "6to Semestre",
    materias: [
      { nombre: "Medicina Interna II", codigo: "MED102", prereq: ["MED101"] },
      { nombre: "Cirugía II", codigo: "CIR102", prereq: ["CIR101"] },
      { nombre: "Pediatría II", codigo: "PED102", prereq: ["PED101"] },
      { nombre: "Ginecología y Obstetricia I", codigo: "GIN101" },
      { nombre: "Psiquiatría", codigo: "PSIQ101" }
    ]
  },
  {
    semestre: "7mo Semestre",
    materias: [
      { nombre: "Ginecología y Obstetricia II", codigo: "GIN102", prereq: ["GIN101"] },
      { nombre: "Emergencias Médicas", codigo: "EME101" },
      { nombre: "Medicina Legal", codigo: "LEG101" },
      { nombre: "Dermatología", codigo: "DER101" },
      { nombre: "Radiología", codigo: "RAD101" }
    ]
  },
  {
    semestre: "8vo Semestre",
    materias: [
      { nombre: "Medicina Interna III", codigo: "MED103", prereq: ["MED102"] },
      { nombre: "Cirugía III", codigo: "CIR103", prereq: ["CIR102"] },
      { nombre: "Pediatría III", codigo: "PED103", prereq: ["PED102"] },
      { nombre: "Ginecología y Obstetricia III", codigo: "GIN103", prereq: ["GIN102"] },
      { nombre: "Oncología", codigo: "ONC101" }
    ]
  },
  {
    semestre: "9no Semestre",
    materias: [
      { nombre: "Rotación Clínica I", codigo: "ROT101" }
    ]
  },
  {
    semestre: "10mo Semestre",
    materias: [
      { nombre: "Rotación Clínica II", codigo: "ROT102", prereq: ["ROT101"] }
    ]
  },
  {
    semestre: "11vo Semestre",
    materias: [
      { nombre: "Rotación Clínica III", codigo: "ROT103", prereq: ["ROT102"] }
    ]
  },
  {
    semestre: "12vo Semestre",
    materias: [
      { nombre: "Rotación Clínica IV", codigo: "ROT104", prereq: ["ROT103"] }
    ]
  }
];

function crearMalla() {
  const contenedor = document.getElementById("malla");

  malla.forEach((sem, i) => {
    const div = document.createElement("div");
    div.className = "semestre";
    div.style.backgroundColor = colores[i % colores.length];

    const titulo = document.createElement("h2");
    titulo.textContent = sem.semestre;
    div.appendChild(titulo);

    sem.materias.forEach((mat) => {
      const boton = document.createElement("button");
      boton.textContent = mat.nombre;
      boton.className = "materia";
      boton.dataset.codigo = mat.codigo;
      if (mat.prereq) boton.dataset.prereq = JSON.stringify(mat.prereq);

      boton.addEventListener("click", () => {
        if (boton.classList.contains("completada")) return;

        const prereq = JSON.parse(boton.dataset.prereq || "[]");
        const aprobadas = Array.from(document.querySelectorAll(".materia.completada")).map(
          (b) => b.dataset.codigo
        );

        const faltan = prereq.filter((r) => !aprobadas.includes(r));
        if (faltan.length) {
          alert("Debes aprobar: " + faltan.join(", "));
          return;
        }

        boton.classList.add("completada");
      });

      div.appendChild(boton);
    });

    contenedor.appendChild(div);
  });
}

crearMalla();
