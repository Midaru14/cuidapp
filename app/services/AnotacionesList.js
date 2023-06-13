const AnotLis = document.querySelector(".anotaciones");
const AnotMes = document.querySelector("#lbl-anot-mensaje");

export const seutupAnot = (dataAnot) => {
  console.log(dataAnot);
  if (dataAnot.length > 0) {
    let html = "";
    dataAnot.forEach((doc) => {
      const anot = doc;
      const li = `
            <div class="msg me">
              <div class="profile">
                <span class="time">${anot.fecha}
              </div>
              <p>
                ${anot.mensaje}
              </p>
            </div>
    `;
      html += li;
    });
    AnotLis.innerHTML = html;
  } else {
    console.log("no datos");
    AnotLis.innerHTML = " ";
  }
};
