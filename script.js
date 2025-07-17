const materias = [
  const materias = [
      { nombre: "Biología Celular y Molecular", semestre: 1, requisitos: [] },
      { nombre: "Química General", semestre: 1, requisitos: [] },
      { nombre: "Anatomía Humana I", semestre: 1, requisitos: [] },
      { nombre: "Histología y Embriología", semestre: 1, requisitos: [] },
      { nombre: "Inglés I", semestre: 1, requisitos: [] },
      { nombre: "Informática Médica", semestre: 1, requisitos: [] },

      { nombre: "Anatomía Humana II", semestre: 2, requisitos: ["Anatomía Humana I"] },
      { nombre: "Química Orgánica", semestre: 2, requisitos: ["Química General"] },
      { nombre: "Bioquímica", semestre: 2, requisitos: ["Química Orgánica"] },
      { nombre: "Fisiología Humana I", semestre: 2, requisitos: ["Biología Celular y Molecular"] },
      { nombre: "Inglés II", semestre: 2, requisitos: ["Inglés I"] },

      { nombre: "Fisiología Humana II", semestre: 3, requisitos: ["Fisiología Humana I"] },
      { nombre: "Parasitología Médica", semestre: 3, requisitos: [] },
      { nombre: "Microbiología Médica I", semestre: 3, requisitos: [] },
      { nombre: "Patología General", semestre: 3, requisitos: ["Histología y Embriología"] },
      { nombre: "Psicología Médica", semestre: 3, requisitos: [] },

      { nombre: "Microbiología Médica II", semestre: 4, requisitos: ["Microbiología Médica I"] },
      { nombre: "Patología Especial", semestre: 4, requisitos: ["Patología General"] },
      { nombre: "Farmacología I", semestre: 4, requisitos: ["Bioquímica"] },
      { nombre: "Salud Pública I", semestre: 4, requisitos: [] },
      { nombre: "Propedéutica Clínica", semestre: 4, requisitos: ["Fisiología Humana II"] },

      { nombre: "Farmacología II", semestre: 5, requisitos: ["Farmacología I"] },
      { nombre: "Salud Pública II", semestre: 5, requisitos: ["Salud Pública I"] },
      { nombre: "Medicina Interna I", semestre: 5, requisitos: ["Propedéutica Clínica"] },
      { nombre: "Laboratorio Clínico", semestre: 5, requisitos: [] },

      { nombre: "Medicina Interna II", semestre: 6, requisitos: ["Medicina Interna I"] },
      { nombre: "Cirugía I", semestre: 6, requisitos: ["Propedéutica Clínica"] },
      { nombre: "Ginecología y Obstetricia I", semestre: 6, requisitos: ["Propedéutica Clínica"] },
      { nombre: "Pediatría I", semestre: 6, requisitos: ["Propedéutica Clínica"] },

      { nombre: "Medicina Interna III", semestre: 7, requisitos: ["Medicina Interna II"] },
      { nombre: "Cirugía II", semestre: 7, requisitos: ["Cirugía I"] },
      { nombre: "Ginecología y Obstetricia II", semestre: 7, requisitos: ["Ginecología y Obstetricia I"] },
      { nombre: "Pediatría II", semestre: 7, requisitos: ["Pediatría I"] },

      { nombre: "Psiquiatría", semestre: 8, requisitos: [] },
      { nombre: "Medicina Legal", semestre: 8, requisitos: [] },
      { nombre: "Oftalmología", semestre: 8, requisitos: [] },
      { nombre: "Otorrinolaringología", semestre: 8, requisitos: [] },
      { nombre: "Dermatología", semestre: 8, requisitos: [] },

      { nombre: "Rotatorio de Medicina Interna", semestre: 9, requisitos: ["Medicina Interna III"] },
      { nombre: "Rotatorio de Cirugía", semestre: 9, requisitos: ["Cirugía II"] },
      { nombre: "Rotatorio de Pediatría", semestre: 9, requisitos: ["Pediatría II"] },
      { nombre: "Rotatorio de Ginecología", semestre: 9, requisitos: ["Ginecología y Obstetricia II"] },

      { nombre: "Rotatorio de Urgencias", semestre: 10, requisitos: [] },
      { nombre: "Rotatorio de Atención Primaria", semestre: 10, requisitos: [] },
      { nombre: "Rotatorio de Psiquiatría", semestre: 10, requisitos: ["Psiquiatría"] },
      { nombre: "Rotatorio de Medicina Comunitaria", semestre: 10, requisitos: [] },

      { nombre: "Internado I", semestre: 11, requisitos: [] },
      { nombre: "Internado II", semestre: 12, requisitos: ["Internado I"] }
    ];

    const estadoMaterias = {};

    function crearMalla() {
      const malla = document.getElementById("malla");
      for (let semestre = 1; semestre <= 12; semestre++) {
        const divSemestre = document.createElement("div");
        divSemestre.className = "semestre";

        const titulo = document.createElement("h2");
        titulo.textContent = `Semestre ${semestre}`;
        divSemestre.appendChild(titulo);

        materias.filter(m => m.semestre === semestre).forEach(materia => {
          const divMateria = document.createElement("div");
          divMateria.className = "materia";
          divMateria.textContent = materia.nombre;

          if (materia.requisitos.length > 0) {
            divMateria.classList.add("bloqueada");
          }

          divMateria.onclick = () => {
            if (divMateria.classList.contains("bloqueada")) return;
            divMateria.classList.toggle("aprobada");
            estadoMaterias[materia.nombre] = divMateria.classList.contains("aprobada");
            actualizarDesbloqueo();
          };

          divMateria.setAttribute("data-nombre", materia.nombre);
          divSemestre.appendChild(divMateria);
        });

        malla.appendChild(divSemestre);
      }
    }

    function actualizarDesbloqueo() {
      materias.forEach(m => {
        const elemento = document.querySelector(`[data-nombre="${m.nombre}"]`);
        if (!elemento) return;

        const aprobados = m.requisitos.every(req => estadoMaterias[req]);

        if (m.requisitos.length === 0 || aprobados) {
          elemento.classList.remove("bloqueada");
        } else {
          if (!elemento.classList.contains("aprobada")) {
            elemento.classList.add("bloqueada");
          }
        }
      });
    }

    crearMalla();
  </script>
</body>
</html>
