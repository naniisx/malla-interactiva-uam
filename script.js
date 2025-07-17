const malla = document.getElementById("malla");

const semestres = [
  {
    nombre: "Semestre 1",
    materias: [
      { nombre: "Química General e Inorgánica", codigo: "QUI101" },
      { nombre: "Biología Celular y Molecular", codigo: "BIO101" },
      { nombre: "Biofísica", codigo: "MD BIF-003" },
      { nombre: "Introducción a la Medicina", codigo: "MED101" },
      { nombre: "Bioestadística", codigo: "MD EDE 005" },
      { nombre: "Inlgés I", codigo: "ENGM -005" },
      { nombre: "Métodos de estudio", codigo: "EDU 007" },
    ],
  },
  {
    nombre: "Semestre 2",
    materias: [
      { nombre: "Bioquímica", codigo: "BIO102", prerequisitos: ["QUI101", "BIO101"] },
      { nombre: "Anatomía II", codigo: "ANA102", prerequisitos: ["ANA101"] },
      { nombre: "Histología", codigo: "HIS101", prerequisitos: ["BIO101"] },
      { nombre: "Psicología Médica", codigo: "PSI101", prerequisitos: ["MED101"] },
    ],
  },
  {
    nombre: "Semestre 3",
    materias: [
      { nombre: "Fisiología", codigo: "FIS101", prerequisitos: ["BIO102", "ANA102"] },
      { nombre: "Microbiología", codigo: "MIC101", prerequisitos: ["BIO102"] },
      { nombre: "Parasitología", codigo: "PAR101", prerequisitos: ["BIO102"] },
      { nombre: "Inmunología", codigo: "INM101", prerequisitos: ["BIO102"] },
    ],
  },
  {
    nombre: "Semestre 4",
    materias: [
      { nombre: "Farmacología I", codigo: "FAR101", prerequisitos: ["FIS101"] },
      { nombre: "Patología I", codigo: "PAT101", prerequisitos: ["MIC101", "PAR101"] },
      { nombre: "Semiología", codigo: "SEM101", prerequisitos: ["FIS101"] },
      { nombre: "Ética Médica", codigo: "ETI101", prerequisitos: ["PSI101"] },
    ],
  },
  {
    nombre: "Semestre 5",
    materias: [
      { nombre: "Farmacología II", codigo: "FAR102", prerequisitos: ["FAR101"] },
      { nombre: "Patología II", codigo: "PAT102", prerequisitos: ["PAT101"] },
      { nombre: "Propedéutica Clínica", codigo: "PRO101", prerequisitos: ["SEM101"] },
      { nombre: "Epidemiología", codigo: "EPI101", prerequisitos: ["INM101"] },
    ],
  },
  {
    nombre: "Semestre 6",
    materias: [
      { nombre: "Medicina Interna I", codigo: "MED201", prerequisitos: ["PRO101"] },
      { nombre: "Pediatría I", codigo: "PED101", prerequisitos: ["PRO101"] },
      { nombre: "Gineco-Obstetricia I", codigo: "GOB101", prerequisitos: ["PRO101"] },
      { nombre: "Cirugía I", codigo: "CIR101", prerequisitos: ["PRO101"] },
    ],
  },
  {
    nombre: "Semestre 7",
    materias: [
      { nombre: "Medicina Interna II", codigo: "MED202", prerequisitos: ["MED201"] },
      { nombre: "Pediatría II", codigo: "PED102", prerequisitos: ["PED101"] },
      { nombre: "Gineco-Obstetricia II", codigo: "GOB102", prerequisitos: ["GOB101"] },
      { nombre: "Cirugía II", codigo: "CIR102", prerequisitos: ["CIR101"] },
    ],
  },
  {
    nombre: "Semestre 8",
    materias: [
      { nombre: "Psiquiatría", codigo: "PSQ101", prerequisitos: ["MED202"] },
      { nombre: "Dermatología", codigo: "DER101", prerequisitos: ["MED202"] },
      { nombre: "Oftalmología", codigo: "OFT101", prerequisitos: ["MED202"] },
      { nombre: "Otorrinolaringología", codigo: "ORL101", prerequisitos: ["MED202"] },
    ],
  },
  {
    nombre: "Semestre 9",
    materias: [
      { nombre: "Ortopedia", codigo: "ORT101", prerequisitos: ["CIR102"] },
      { nombre: "Urología", codigo: "URO101", prerequisitos: ["CIR102"] },
      { nombre: "Reumatología", codigo: "REU101", prerequisitos: ["MED202"] },
      { nombre: "Endocrinología", codigo: "END101", prerequisitos: ["MED202"] },
    ],
  },
  {
    nombre: "Semestre 10",
    materias: [
      { nombre: "Geriatría", codigo: "GER101", prerequisitos: ["MED202"] },
      { nombre: "Infectología", codigo: "INF101", prerequisitos: ["EPI101", "MED202"] },
      { nombre: "Emergencias Médicas", codigo: "EME101", prerequisitos: ["CIR102"] },
      { nombre: "Rotación Hospitalaria I", codigo: "ROT101", prerequisitos: ["CIR102", "MED202"] },
    ],
  },
  {
    nombre: "Semestre 11",
    materias: [
      { nombre: "Rotación Hospitalaria II", codigo: "ROT102", prerequisitos: ["ROT101"] },
      { nombre: "Medicina Legal", codigo: "LEG101", prerequisitos: ["ETI101"] },
    ],
  },
  {
    nombre: "Semestre 12",
    materias: [
      { nombre: "Internado Médico", codigo: "INT101", prerequisitos: ["ROT102"] },
      { nombre: "Trabajo de Graduación", codigo: "TG101", prerequisitos: ["ROT102"] },
    ],
  },
];

const estadoMaterias = {};

function puedeDesbloquear(materia) {
  if (!materia.prerequisitos) return true;
  return materia.prerequisitos.every((cod) => estadoMaterias[cod] === "aprobada");
}

function render() {
  malla.innerHTML = "";
  semestres.forEach((sem) => {
    const div = document.createElement("div");
    div.className = "semestre";
    const titulo = document.createElement("h3");
    titulo.textContent = sem.nombre;
    div.appendChild(titulo);

    sem.materias.forEach((mat) => {
      const matDiv = document.createElement("div");
      matDiv.textContent = mat.nombre;
      matDiv.className = "materia";

      const estado = estadoMaterias[mat.codigo];
      if (estado === "aprobada") {
        matDiv.classList.add("aprobada");
      } else if (!puedeDesbloquear(mat)) {
        matDiv.classList.add("bloqueada");
      }

      matDiv.onclick = () => {
        if (!puedeDesbloquear(mat)) return;
        estadoMaterias[mat.codigo] =
          estadoMaterias[mat.codigo] === "aprobada" ? "pendiente" : "aprobada";
        render();
      };

      div.appendChild(matDiv);
    });
    malla.appendChild(div);
  });
}

render();
