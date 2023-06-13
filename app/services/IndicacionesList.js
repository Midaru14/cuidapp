const IndList = document.querySelector(".indicaciones");
const IndMes = document.querySelector(".lbl-ind-mensaje");

export const setupInds = (data) => {
  if (data.length > 0) {
    let html = "";
    data.forEach((doc) => {
      const indi = doc;
      const li = `
      <tr>
        <td>${indi.nombre}</td>
        <td>${indi.descripcionMedicamento}</td>
        <td>${indi.presentacionMedicamento}</td>
        <td>${indi.unidadMedidaMedicamento}</td>
      </tr>
    `;
      html += li;
    });
    IndList.innerHTML = html;
    IndMes.innerHTML = " <p>Las indicaciones registradas en CuidAPP son:</p>";
  } else {
    console.log("no datos");
     AnotLis.innerHTML = "";
     IndMes="";
  }
};
