//VARIAVEL GLOBAL
const visor = document.getElementById("resultado");

function insert (num) {
    visor.style.color = '#000';
    visor.textContent += num;
}

function clean() {

    visor.textContent = "";
}

function back() {
    let numeroVisor = visor.textContent;

    visor.textContent = numeroVisor.substring(0, numeroVisor.length -1);
}


function calcular() {

    let calculo = visor.textContent;

    if (calculo.length > 2) {
        visor.style.color = 'green';
        visor.textContent = eval(calculo);

    }
    else{
        visor.textContent = "Error";
        visor.style.color = 'red';
        visor.style.textAlign = 'center';

        setTimeout(() => {
            clean();
            visor.style.color = '#000';
            visor.style.textAlign = 'right';
        }, 1000);
    }


}
