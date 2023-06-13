const MedList = document.querySelector(".medicamentos");
const MedMens = document.querySelector(".lbl-me-mensaje");

export const setupMeds = (datamed) => {
  console.log(datamed);
  if (datamed.length > 0) {
    let html = "";
    datamed.forEach((doc) => {
      const medi = doc;
      const li = `
      <tr>
        <td>${medi.nombreMedicamento}</td>
        <td>${medi.descripcionMedicamento}</td>
        <td>${medi.presentacionMedicamento}</td>
        <td>${medi.unidadMedidaMedicamento}</td>
        <td>${medi.fechaVencimientoISO8601}</td>
        <td>${medi.stock}</td>
      </tr>
    `;
      html += li;
    });
    MedList.innerHTML = html;
    MedMens.innerHTML = " <p>Los medicamentos registrados en CuidAPP son:</p>";
  } else {
    console.log("no datos");
    MedList.innerHTML = "";
    MedMens.innerHTML =
      " <p>No hay medicamentos registrados para el usuario</p>";
  }
};
