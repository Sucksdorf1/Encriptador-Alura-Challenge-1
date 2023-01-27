var analyzeText;

function inspectText(){
    var text = document.getElementById("ingreso").value;

    if (/[A-Z]|\d|[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/.test(text)) {
        alert("No funciona con acentos o letras mayúsculas");
        analyzeText = false;
    }
    else if (/[a-z]/.test(text)) {
        analyzeText = true;
    }
}

function encrypt() {
    var text = document.getElementById("ingreso").value;

    inspectText();
    if (analyzeText == true) {
        let ingreso = text.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
        document.getElementById("egreso").style.backgroundColor = '#c4c4c4';
        document.getElementById("egreso").value = ingreso;
        document.getElementById("ingreso").value = "";
    }
    else {
        (text.value == "");
        alert("Escriba por favor");
    }
}

function decrypt() {
    var text = document.getElementById("ingreso").value;
    inspectText();
    if (analyzeText == true) {
        let ingreso = text.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        document.getElementById("egreso").style.backgroundColor = '#c4c4c4';
        document.getElementById("egreso").value = ingreso;
        document.getElementById("ingreso").value = "";
    }
    else {
        (text.value == "");
        alert("No hay mensaje");
    }
}

function copy() {
    var message = document.getElementById("egreso");
    if (message.value == "") {
        alert("No hay mensaje");
    }
    else {
        message.select();
        navigator.clipboard.writeText(message.value);
        alert("Su mensaje ha sido copiado con éxito");
        document.getElementById("egreso").value = "";
        document.getElementById("egreso").style.backgroundColor = 'transparent';
    }
}