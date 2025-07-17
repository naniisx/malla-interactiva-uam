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
      { nombre: "Geografía de Panamá", codigo: "GEO 070" },
      { nombre: "Sociología", codigo: "MD SOC-001" },
      { nombre: "Demografía", codigo: "MD DEMO 001" },
      { nombre: "Inglés II", codigo: "ENGM-010" },
      { nombre: "Metodología de la Inv. I", codigo: "EDU 006" },
      { nombre: "Química Orgánica", codigo: "MD QUIM001.1" },
      { nombre: "Embriología Humana", codigo: "MD HIEM 013" },
      { nombre: "Español", codigo: "ESP 040" },
    ],
  },
  {
    nombre: "Semestre 3",
    materias: [
      { nombre: "Bioquímica Humana I", codigo: "MD BIOQ 010" },
      { nombre: "Anatomía Humana I", codigo: "MD ANHU-011" },
      { nombre: "Histología Humana I", codigo: "MD HISTH 001" },
      { nombre: "Inglés III", codigo: "ENGM-015" },
      { nombre: "Dif.Humana, Diversidad y Pensamiento Crítico", codigo: "EDU 066" },
      { nombre: "Historia de Panamá I", codigo: "HIS-050" },
      { nombre: "Antropología", codigo: "MD ANT-001" },
    ],
  },
  {
    nombre: "Semestre 4",
    materias: [
      { nombre: "Bioquímica Humana II", codigo: "MD BIOQ 011" },
      { nombre: "Anatomía Humana II", codigo: "MD ANHU-011B" },
      { nombre: "Histología Humana II", codigo: "MD HISTH 002" },
      { nombre: "Microbiología Humana", codigo: "MD MIHU 016" },
      { nombre: "Neuroanatomía Humana", codigo: "MD NEHU 013" },
      { nombre: "Fisiología Humana", codigo: "MD FISHU 017" },
      { nombre: "Historia de Panamá II", codigo: "HIS-051" },
    ],
  },
  {
    nombre: "Semestre 5",
    materias: [
      { nombre: "Parasitología", codigo: "MD PARA -018" },
      { nombre: "Patología", codigo: "MD PATOL 001" },
      { nombre: "Farmacología I", codigo: "MD FAR 020" },
      { nombre: "Nutrición Humana", codigo: "MD NUHU-021" },
      { nombre: "Epidemiología I", codigo: "MD EPID 026ª" },
      { nombre: "Historia de Relaciones Panamá/EUA", codigo: "HIS-052" },
      { nombre: "Psicología y Psicopatología", codigo: "PSPAT-024" },
    ],
  },
  {
    nombre: "Semestre 6",
    materias: [
      { nombre: "Farmacología II", codigo: "MD FARM-022" },
      { nombre: "Inmunología Médica", codigo: "MD INMU 025" },
      { nombre: "Fisiopatología", codigo: "MD FIPA 025" },
      { nombre: "Epidemiología II", codigo: "MD EPID 026B" },
      { nombre: "Educación Ambiental", codigo: "EDU 076" },
      { nombre: "Primeros Auxilios", codigo: "MD PRAUX 019" },
    ],
  },
  {
    nombre: "Semestre 7",
    materias: [
      { nombre: "Propedéutica Clínica", codigo: "MD PROC-026" },
      { nombre: "Medicina Legal", codigo: "MD MELE 028" },
      { nombre: "Psiquiatría", codigo: "MD PSIQ-029" },
      { nombre: "Imagenología", codigo: "MD IMAG-001" },
      { nombre: "Salud Pública I", codigo: "MD SAPU-031" },
      { nombre: "Ética y Deontología", codigo: "MD EDEM 010" },
      { nombre: "Desarrollo del Espíritu Emprendedor", codigo: "ADM 020" },
    ],
  },
  {
    nombre: "Semestre 8",
    materias: [
      { nombre: "Hematología Clínica", codigo: "MD HECI-032" },
      { nombre: "Medicina Interna I", codigo: "MD MINT-033" },
      { nombre: "Neumología", codigo: "MD NEUM-034" },
      { nombre: "Dermatología", codigo: "MD DERM 035" },
      { nombre: "Salud Pública II", codigo: "MD SAPU-036" },
      { nombre: "Satisfacción al Cliente en Salud", codigo: "MD SAC-001" },
    ],
  },
  {
    nombre: "Semestre 9",
    materias: [
      { nombre: "Cardiología", codigo: "MD CARDI-037" },
      { nombre: "Obstetricia *", codigo: "MD OBST-038" },
      { nombre: "Medicina Interna II", codigo: "MD MINT 044" },
      { nombre: "Imagenología Correlativa", codigo: "MD IMCO 046" },
      { nombre: "Pediatría I", codigo: "MD PEDI-040" },
    ],
  },
  {
    nombre: "Semestre 10",
    materias: [
      { nombre: "Ginecología", codigo: "MD-GINE-041" },
      { nombre: "Ortopedia y Traumatología", codigo: "MD ORTO T042" },
      { nombre: "Otorrinolaringología", codigo: "MDOTORRI 043" },
      { nombre: "Cirugía General", codigo: "MD CIRUG 039" },
      { nombre: "Pediatría II", codigo: "MD PEDI-045" },
      { nombre: "Medicina Familiar/de Comunidad", codigo: "MD MFC 052" },
    ],
  },
  {
    nombre: "Semestre 11",
    materias: [
      { nombre: "Terapéutica", codigo: "MD TERA 047" },
      { nombre: "Oftalmología", codigo: "MD OFT-048" },
      { nombre: "Urología", codigo: "MD URO-049" },
      { nombre: "Neurología y Neurocirugía", codigo: "MD NENE 050" },
      { nombre: "Medicina de Urgencias", codigo: "MD MEUR-051" },
      { nombre: "Integración Profesional", codigo: "MD IPROF 055" },
    ],
  },
  {
    nombre: "Semestre 12",
    materias: [
      { nombre: "Práctica Hospitalaria", codigo: "MD PHAP 053" },
      { nombre: "Metodología de la Invest. II", codigo: "EDU 007" },
      { nombre: "Literatura Médica en Inglés", codigo: "MD LMI 055" },
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
