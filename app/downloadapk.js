function descargarAPK() {
  var link = document.createElement("a");
  link.href = "../Download/app-debug.apk ";
  link.download = "app-debug.apk";
  link.click();
}
