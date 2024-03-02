const textArea = document.querySelector(".text-area");//texto ingresado para encriptar o desencriptar
const mensajeResultante = document.querySelector(".mensaje-resultante");

let matrizcodigo = [//arreglo multidimencional
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
];

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensajeResultante.value = textoEncriptado;
    textArea.value = "";
    mensajeResultante.style.backgroundImage = "none";

}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensajeResultante.value = textoEncriptado;
    textArea.value = "";
}

function encriptar(stringAEncriptar) {
    stringAEncriptarEnMinusculas = stringAEncriptar.toLowerCase(); 
    
    for (let i = 0; i < matrizcodigo.length; i++) {
        if (stringAEncriptarEnMinusculas.includes(matrizcodigo[i][0])) {
            stringAEncriptarEnMinusculas = stringAEncriptarEnMinusculas.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1]);            
        }
        
    }
    return stringAEncriptarEnMinusculas;
}

function desencriptar(stringADesencriptar) {
    stringADesencriptarEnMinusculas = stringADesencriptar.toLowerCase(); 
    
    for (let i = 0; i < matrizcodigo.length; i++) {
        if (stringADesencriptarEnMinusculas.includes(matrizcodigo[i][1])) {
            stringADesencriptarEnMinusculas = stringADesencriptarEnMinusculas.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0]);            
        }
        
    }
    return stringADesencriptarEnMinusculas;
}

function copiar() {
    // Get the text field
    let copyText = document.querySelector(".mensaje-resultante");
  
    // Seleccionar todo
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copiar al porta papeles
    navigator.clipboard.writeText(copyText.value);
    
    // Alert the copied text
    alert("Texto copiado");
  }