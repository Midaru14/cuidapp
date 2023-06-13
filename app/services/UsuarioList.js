const UsuList = document.querySelector(".usuario");
const nombreUsuarioElement = document.querySelector("#nombre_usuario");

export const setupUsu = (dataUsu) => {
  console.log(dataUsu);
  if (dataUsu.length > 0) {
    let html = "";
    dataUsu.forEach((doc) => {
      const usu = doc;
      const li = `
         <p style="margin-left: 95px">Edad: ${usu.edad} Años</p>
        <p style="margin-left: 95px">Sexo: ${usu.sexo}</p>
        <p style="margin-left: 95px">Email: ${usu.email}</p>
       <p style="margin-left: 95px">Diagnóstico: ${usu.diagnostico}</p>
     `;
      html += li;
    });
    UsuList.innerHTML = html;
    nombreUsuarioElement.textContent = dataUsu[0].nombre;
  } else {
    console.log("no datos");
    UsuList.innerHTML = "";
    nombreUsuarioElement.textContent =
      "No hay datos del usuario";
  }
};
