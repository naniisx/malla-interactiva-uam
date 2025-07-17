const malla = document.getElementById("malla");

const semestres = [
  {
    nombre: "Semestre 1",
    materias: [
      { nombre: "Quím. General e Inorgánica", codigo: "MD QUIM-002", prerequisitos: [] },
      { nombre: "Biología Celular y Molec", codigo: "MD BIO-002", prerequisitos: [] },
      { nombre: "Biofísica", codigo: "MD BIF-003", prerequisitos: [] },
      { nombre: "Introducción a la Medic", codigo: "MD IM 014", prerequisitos: [] },
      { nombre: "Bioestadística", codigo: "MD EDE 005", prerequisitos: [] },
      { nombre: "Inglés I", codigo: "ENGM -005", prerequisitos: [] },
      { nombre: "Métodos de Estudio", codigo: "EDU 007", prerequisitos: [] },
    ],
  },
  {
    nombre: "Semestre 2",
    materias: [
      { nombre: "Geografía de Panamá", codigo: "GEO 070", prerequisitos: [] },
      { nombre: "Sociología", codigo: "MD SOC-001", prerequisitos: [] },
      { nombre: "Demografía", codigo: "MD DEMO 001", prerequisitos: [] },
      { nombre: "Inglés II", codigo: "ENGM-010", prerequisitos: ["ENGM -005"] },
      { nombre: "Metodología de la Inv. I", codigo: "EDU 006", prerequisitos: ["MD EDE 005"] },
      { nombre: "Química Orgánica", codigo: "MD QUIM001.1", prerequisitos: ["MD QUIM-002"] },
      { nombre: "Embriología Humana", codigo: "MD HIEM 013", prerequisitos: ["MD BIO-002"] },
      { nombre: "Español", codigo: "ESP 040", prerequisitos: [] },
    ],
  },
  {
    nombre: "Semestre 3",
    materias: [
      { nombre: "Bioquímica Humana I", codigo: "MD BIOQ 010", prerequisitos: ["MD QUIM-002", "MD QUIM001.1", "MD BIO-002", "MD BIF-003"] },
      { nombre: "Anatomía Humana I", codigo: "MD ANHU-011", prerequisitos: ["MD QUIM-002", "MD QUIM001.1", "MD BIO-002", "MD BIF-003"] },
      { nombre: "Histología Humana I", codigo: "MD HISTH 001", prerequisitos: ["MD BIO-002"] },
      { nombre: "Inglés III", codigo: "ENGM-015", prerequisitos: ["ENGM-010"] },
      { nombre: "Dif.Humana, Diversidad y Pensamiento Crítico", codigo: "EDU 066", prerequisitos: [] },
      { nombre: "Historia de Panamá I", codigo: "HIS-050", prerequisitos: [] },
      { nombre: "Antropología", codigo: "MD ANT-001", prerequisitos: [] },
    ],
  },
  {
    nombre: "Semestre 4",
    materias: [
      { nombre: "Bioquímica Humana II", codigo: "MD BIOQ 011", prerequisitos: ["MD BIOQ 010"] },
      { nombre: "Anatomía Humana II", codigo: "MD ANHU-011B", prerequisitos: ["MD HIEM 013", "MD ANHU-011"] },
      { nombre: "Histología Humana II", codigo: "MD HISTH 002", prerequisitos: ["MD HISTH 001"] },
      { nombre: "Microbiología Humana", codigo: "MD MIHU 016", prerequisitos: ["MD BIO-002"] },
      { nombre: "Neuroanatomía Humana", codigo: "MD NEHU 013", prerequisitos: ["MD BIOQ 010"] },
      { nombre: "Fisiología Humana", codigo: "MD FISHU 017", prerequisitos: ["MD ANHU-011"] },
      { nombre: "Historia de Panamá II", codigo: "HIS-051", prerequisitos: ["HIS-050"] },
    ],
  },
  {
    nombre: "Semestre 5",
    materias: [
      { nombre: "Parasitología", codigo: "MD PARA -018", prerequisitos: ["MD BIO-002"] },
      { nombre: "Patología", codigo: "MD PATOL 001", prerequisitos: ["MD ANHU-011B"] },
      { nombre: "Farmacología I", codigo: "MD FAR 020", prerequisitos: ["MD BIOQ 011"] },
      { nombre: "Nutrición Humana", codigo: "MD NUHU-021", prerequisitos: ["MD BIOQ 011"] },
      { nombre: "Epidemiología I", codigo: "MD EPID 026ª", prerequisitos: ["MD DEMO 001", "MD EDE 005"] },
      { nombre: "Hist. de Relacio. PMÁ/EUA", codigo: "HIS-052", prerequisitos: ["HIS-051"] },
      { nombre: "Psicología y Psicopat.", codigo: "PSPAT-024", prerequisitos: ["MD FISHU 017", "MD NEHU 013"] },
    ],
  },
  {
    nombre: "Semestre 6",
    materias: [
      { nombre: "Farmacología II", codigo: "MD FARM-022", prerequisitos: ["MD FAR 020"] },
      { nombre: "Inmunología Médica", codigo: "MD INMU 025", prerequisitos: ["MD BIOQ 011"] },
      { nombre: "Fisiopatología", codigo: "MD FIPA 025", prerequisitos: ["MD PATOL 001"] },
      { nombre: "Epidemiología II", codigo: "MD EPID 026B", prerequisitos: ["MD EPID 026ª"] },
      { nombre: "Educación Ambiental", codigo: "EDU 076", prerequisitos: ["GEO 070"] },
      { nombre: "Primeros Auxilios", codigo: "MD PRAUX 019", prerequisitos: [] },
    ],
  },
  {
    nombre: "Semestre 7",
    materias: [
      { nombre: "Propedéutica Clínica", codigo: "MD PROC-026", prerequisitos: ["MD ANHU-011", "MD ANHU-011B", "MD FISHU 017"] },
      { nombre: "Medicina Legal", codigo: "MD MELE 028", prerequisitos: ["MD PATOL 001"] },
      { nombre: "Psiquiatría", codigo: "MD PSIQ-029", prerequisitos: ["PSPAT-024"] },
      { nombre: "Imagenología", codigo: "MD IMAG-001", prerequisitos: ["MD ANHU-011B"] },
      { nombre: "Salud Pública I", codigo: "MD SAPU-031", prerequisitos: ["MD EPID 026B"] },
      { nombre: "Ética y Deontología", codigo: "MD EDEM 010", prerequisitos: ["ADM 020"] },
      { nombre: "Des. del Espíritu Emprend.", codigo: "ADM 020", prerequisitos: [] },
    ],
  },
  {
    nombre: "Semestre 8",
    materias: [
      { nombre: "Hematología Clínica", codigo: "MD HECI-032", prerequisitos: ["MD FIPA 025"] },
      { nombre: "Medicina Interna I", codigo: "MD MINT-033", prerequisitos: ["MD PROC-026"] },
      { nombre: "Neumología", codigo: "MD NEUM-034", prerequisitos: ["MD PROC-026"] },
      { nombre: "Dermatología", codigo: "MD DERM 035", prerequisitos: ["MD PROC-026"] },
      { nombre: "Salud Pública II", codigo: "MD SAPU-036", prerequisitos: ["MD SAPU-031"] },
      { nombre: "Satisfacción al Cliente en Salud", codigo: "MD SAC-001", prerequisitos: [] },
    ],
  },
  {
    nombre: "Semestre 9",
    materias: [
      { nombre: "Cardiología", codigo: "MD CARDI-037", prerequisitos: ["MD MINT-033"] },
      { nombre: "Obstetricia *", codigo: "MD OBST-038", prerequisitos: [] },
      { nombre: "Medicina Interna II", codigo: "MD MINT 044", prerequisitos: ["MD MINT-033"] },
      { nombre: "Imagenología Correlativa", codigo: "MD IMCO 046", prerequisitos: [] },
      { nombre: "Pediatría I", codigo: "MD PEDI-040", prerequisitos: ["MD MINT-033"] },
    ],
  },
  {
    nombre: "Semestre 10",
    materias: [
      { nombre: "Ginecología", codigo: "MD-GINE-041", prerequisitos: [] },
      { nombre: "Ortopedia y Traumatología", codigo: "MD ORTO T042", prerequisitos: [] },
      { nombre: "Otorrinolaringología", codigo: "MDOTORRI 043", prerequisitos: [] },
      { nombre: "Cirugía General", codigo: "MD CIRUG 039", prerequisitos: [] },
      { nombre: "Pediatría II", codigo: "MD PEDI-045", prerequisitos: ["MD PEDI-040"] },
      { nombre: "Medicina Familiar/de Comunidad", codigo: "MD MFC 052", prerequisitos: [] },
    ],
  },
  {
    nombre: "Semestre 11",
    materias: [
      { nombre: "Terapéutica", codigo: "MD TERA 047", prerequisitos: ["MD MINT 044"] },
      { nombre: "Oftalmología", codigo: "MD OFT-048", prerequisitos: [] },
      { nombre: "Urología", codigo: "MD URO-049", prerequisitos: [] },
      { nombre: "Neurología y Neurocirugía", codigo: "MD NENE 050", prerequisitos: [] },
      { nombre: "Medicina de Urgencias", codigo: "MD MEUR-051", prerequisitos: [] },
      { nombre: "Integración Profesional", codigo: "MD IPROF 055", prerequisitos: [] },
    ],
  },
  {
    nombre: "Semestre 12",
    materias: [
      { nombre: "Práctica Hospitalaria", codigo: "MD PHAP 053", prerequisitos: [] },
      { nombre: "Metodología de la Invest. II", codigo: "EDU 007", prerequisitos: [] },
      { nombre: "Literatura Médica en Inglés", codigo: "MD LMI 055", prerequisitos: [] },
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
