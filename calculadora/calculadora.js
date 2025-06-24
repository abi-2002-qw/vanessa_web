
document.addEventListener('DOMContentLoaded', () => {
    let salida = document.getElementById("screen");
    let sub_salida = document.getElementById("title");
    let cambios = true;

    function actualizarSalida() {
        if (!salida.textContent) {
            salida.textContent = "0";
        }
    }

    actualizarSalida();

    window.digitos = function(entrada) {
        if (salida.textContent == "0" || cambios) {
            salida.textContent = "";
            cambios = false;
        }
        salida.textContent += entrada;
    };

    document.getElementById("delete").addEventListener("click", function () {
        salida.textContent = salida.textContent.slice(0, -1);
        actualizarSalida();
    });

    document.getElementById("result").addEventListener("click", function () {
        try {
            sub_salida.textContent = salida.textContent;
            salida.textContent = eval(salida.textContent);
            cambios = true;
        } catch (e) {
            salida.textContent = "Error";
            sub_salida.textContent = "";
            cambios = true;
        }
    });

    document.getElementById("clear").addEventListener("click", function () {
        salida.textContent = "0";
        sub_salida.textContent = "";
        cambios = true;
    });
});