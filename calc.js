document.addEventListener('DOMContentLoaded', function () {
    let pantalla = document.getElementById('pantalla');
    let botones = document.querySelectorAll('.botones');
    let igual = document.querySelector('.igual');
    let resultado = 0;
    let operacion = '';

    botones.forEach(function (boton) {
        boton.addEventListener('click', function () {
            agregarAlPantalla(boton.value);
        });
    });

    igual.addEventListener('click', function () {
        calcularResultado();
    });

    function agregarAlPantalla(valor) {
        if (valor === 'C') {
            pantalla.value = '0';
            resultado = 0;
            operacion = '';
        } else if (valor === '=') {
            calcularResultado();
        } else {
            pantalla.value = pantalla.value === '0' ? valor : pantalla.value + valor;
            operacion = pantalla.value;
        }
    }

    function calcularResultado() {
        try {
            if (operacion !== '') {
                resultado = eval(operacion);
                if (isNaN(resultado) || !isFinite(resultado)) {
                    throw new Error('Operación no válida');
                }
                pantalla.value = resultado;
                operacion = '';
            }
        } catch (error) {
            pantalla.value = 'Error';
            console.error(error.message);
        }
    }
});
