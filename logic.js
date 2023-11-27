var respuestasArray = [];

function validateForm() {
    var radios = document.getElementsByName("opciones");
    var formValid = false;

    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            formValid = true;
            break;
        }
    }

    if (!formValid) {
        alert("Por favor, seleccione una opción.");
        return false;
    }

    respuestasArray.push({
        pregunta1: "Cuál es su género",
        respuesta1: radios[i].value,
        archivo1:"filtro"
    });

    alert(respuestasArray[1].respuesta1); // Aquí se muestra la respuesta guardada en el array

    return true;
}
