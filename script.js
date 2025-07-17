const semestres = [
  {
    nombre: "Semestre 1",
    materias: [
      { id: "BIO-111", nombre: "Biología Celular y Molecular", prerrequisitos: [] },
      { id: "QUI-113", nombre: "Química General", prerrequisitos: [] },
      { id: "MAT-115", nombre: "Matemática Básica", prerrequisitos: [] },
      { id: "MED-117", nombre: "Introducción a la Medicina", prerrequisitos: [] },
      { id: "PSI-119", nombre: "Psicología General", prerrequisitos: [] }
    ]
  },
  {
    nombre: "Semestre 2",
    materias: [
      { id: "BIO-121", nombre: "Biología del Desarrollo", prerrequisitos: ["BIO-111"] },
      { id: "QUI-123", nombre: "Química Orgánica", prerrequisitos: ["QUI-113"] },
      { id: "ANF-125", nombre: "Anatomía Funcional I", prerrequisitos: ["BIO-111"] },
      { id: "FIS-127", nombre: "Física General", prerrequisitos: ["MAT-115"] },
      { id: "PSI-129", nombre: "Psicología Médica", prerrequisitos: ["PSI-119"] }
    ]
  },
  {
    nombre: "Semestre 3",
    materias: [
      { id: "BIO-211", nombre: "Bioquímica Humana", prerrequisitos: ["QUI-123", "BIO-121"] },
      { id: "ANF-213", nombre: "Anatomía Funcional II", prerrequisitos: ["ANF-125"] },
      { id: "FIS-215", nombre: "Fisiología I", prerrequisitos: ["BIO-121", "FIS-127"] },
      { id: "MIC-217", nombre: "Microbiología Médica I", prerrequisitos: ["BIO-111"] },
      { id: "ETI-219", nombre: "Ética Médica", prerrequisitos: [] }
    ]
  },
  {
    nombre: "Semestre 4",
    materias: [
      { id: "BIO-221", nombre: "Genética Humana", prerrequisitos: ["BIO-211"] },
      { id: "FIS-223", nombre: "Fisiología II", prerrequisitos: ["FIS-215"] },
      { id: "MIC-225", nombre: "Microbiología Médica II", prerrequisitos: ["MIC-217"] },
      { id: "PAT-227", nombre: "Patología General", prerrequisitos: ["BIO-211", "FIS-215"] },
      { id: "MED-229", nombre: "Medicina Preventiva I", prerrequisitos: [] }
    ]
  },
  {
    nombre: "Semestre 5",
    materias: [
      { id: "PAT-311", nombre: "Patología Sistémica", prerrequisitos: ["PAT-227"] },
      { id: "FAR-313", nombre: "Farmacología General", prerrequisitos: ["BIO-211", "FIS-223"] },
      { id: "PAR-315", nombre: "Parasitología Médica", prerrequisitos: ["BIO-211"] },
      { id: "PSI-317", nombre: "Psicología Clínica", prerrequisitos: ["PSI-129"] },
      { id: "MET-319", nombre: "Métodos de Investigación", prerrequisitos: [] }
    ]
  },
  {
    nombre: "Semestre 6",
    materias: [
      { id: "INT-321", nombre: "Introducción a la Clínica", prerrequisitos: ["PAT-311", "FAR-313"] },
      { id: "DER-323", nombre: "Dermatología", prerrequisitos: ["PAT-311"] },
      { id: "MED-325", nombre: "Medicina Preventiva II", prerrequisitos: ["MED-229"] },
      { id: "GEN-327", nombre: "Genética Clínica", prerrequisitos: ["BIO-221"] },
      { id: "EME-329", nombre: "Emergencias Médicas", prerrequisitos: ["FAR-313"] }
    ]
  },
  {
    nombre: "Semestre 7",
    materias: [
      { id: "MED-411", nombre: "Medicina Interna I", prerrequisitos: ["INT-321"] },
      { id: "PED-413", nombre: "Pediatría I", prerrequisitos: ["INT-321"] },
      { id: "GIN-415", nombre: "Ginecología I", prerrequisitos: ["INT-321"] },
      { id: "QUI-417", nombre: "Cirugía I", prerrequisitos: ["INT-321"] },
      { id: "PSI-419", nombre: "Psiquiatría I", prerrequisitos: ["PSI-317"] }
    ]
  },
  {
    nombre: "Semestre 8",
    materias: [
      { id: "MED-421", nombre: "Medicina Interna II", prerrequisitos: ["MED-411"] },
      { id: "PED-423", nombre: "Pediatría II", prerrequisitos: ["PED-413"] },
      { id: "GIN-425", nombre: "Ginecología II", prerrequisitos: ["GIN-415"] },
      { id: "QUI-427", nombre: "Cirugía II", prerrequisitos: ["QUI-417"] },
      { id: "PSI-429", nombre: "Psiquiatría II", prerrequisitos: ["PSI-419"] }
    ]
  },
  {
    nombre: "Semestre 9",
    materias: [
      { id: "COM-511", nombre: "Medicina Comunitaria", prerrequisitos: ["MED-325"] },
      { id: "LEG-513", nombre: "Medicina Legal", prerrequisitos: [] },
      { id: "TRA-515", nombre: "Traumatología", prerrequisitos: ["QUI-427"] },
      { id: "OPT-517", nombre: "Oftalmología", prerrequisitos: ["MED-421"] },
      { id: "OTO-519", nombre: "Otorrinolaringología", prerrequisitos: ["MED-421"] }
    ]
  },
  {
    nombre: "Semestre 10",
    materias: [
      { id: "INT-521", nombre: "Internado Médico I", prerrequisitos: ["MED-421", "QUI-427", "PED-423", "GIN-425"] }
    ]
  },
  {
    nombre: "Semestre 11",
    materias: [
      { id: "INT-611", nombre: "Internado Médico II", prerrequisitos: ["INT-521"] }
    ]
  },
  {
    nombre: "Semestre 12",
    materias: [
      { id: "INT-621", nombre: "Internado Médico III", prerrequisitos: ["INT-611"] }
    ]
  }
];

const aprobadas = new Se
