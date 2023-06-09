const MedList = document.querySelector(".medicamentos");

export const setupMeds = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const medi = doc;
      const li = `
      <li class="medicamento-item">
        <h5>${medi.nombreMedicamento}</h5>
        <p>Descripción: ${medi.descripcionMedicamento}</p>
        <p>Presentación: ${medi.presentacionMedicamento}</p>
        <p>Unidad de Medida: ${medi.unidadMedidaMedicamento}</p>
      </li>
    `;
      html += li;
    });
    MedList.innerHTML = html;
  } else {
    MedList.innerHTML =
      '<h4 class="text-white">No se encontraron medicamentos</h4>';
  }
};

