let mensajeDeUsuario;
let opcion = 0;
let textoCopiado;


function validarCaracteres(opcion) {
  mensajeDeUsuario = document.getElementById("texto").value;
  if (/^[a-z\s]+$/.test(mensajeDeUsuario)) {
    console.log("solo son minusculas");
    document.getElementById("aviso").style.display = "none";
    document.getElementById("mensajeNoEncontrado").style.display = "none";
    document.getElementById("imagenNoEncontrado").style.display = "none";
    if (opcion == 1) {
      encriptar();
    } else if (opcion == 2) {
      desencriptar();
      console.log(opcion);
    }
  } else {
    if (typeof mensajeDeUsuario === "string" && mensajeDeUsuario.length === 0) {
      document.getElementById("mensajeNoEncontrado").style.display = "block";
      document.getElementById("imagenNoEncontrado").style.display = "block";
    } else {
      console.log("no todos los caracteres son minusculas");
      document.getElementById("aviso").style.display = "block";
      console.log(mensajeDeUsuario);
    }
  }
}

function encriptar() {
  mensajeDeUsuario = document.getElementById("texto").value;
  console.log(mensajeDeUsuario);
  let mensajeEncriptado = " ";
  mensajeDeUsuario = mensajeDeUsuario.replaceAll("a", "ai");
  mensajeDeUsuario = mensajeDeUsuario.replaceAll("e", "enter");
  mensajeDeUsuario = mensajeDeUsuario.replaceAll("i", "imes");
  mensajeDeUsuario = mensajeDeUsuario.replaceAll("o", "ober");
  mensajeDeUsuario = mensajeDeUsuario.replaceAll("u", "ufat");
  document.getElementById("mensaje").style.display = "block";
  document.getElementById("mensaje").innerText= mensajeDeUsuario
  console.log(typeof mensajeEncriptado);
  console.log(mensajeDeUsuario);
}

function desencriptar() {
  mensajeDeUsuario = document.getElementById("texto").value;
  let mensajeEncriptado = " ";
  mensajeDeUsuario = mensajeDeUsuario.replaceAll("ai", "a");
  mensajeDeUsuario = mensajeDeUsuario.replaceAll("enter", "e");
  mensajeDeUsuario = mensajeDeUsuario.replaceAll("imes", "i");
  mensajeDeUsuario = mensajeDeUsuario.replaceAll("ober", "o");
  mensajeDeUsuario = mensajeDeUsuario.replaceAll("ufat", "u");
  document.getElementById("mensaje").style.display = "block";
  document.getElementById("mensaje").innerText= mensajeDeUsuario;
  console.log(typeof mensajeEncriptado);
  console.log(mensajeDeUsuario);
}

function copiar(){
    const copiarText = document.querySelector('.mensaje');

    copiarText.select();

    navigator.clipboard.writeText(copiarText.value);
}


