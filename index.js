
function somar() {
    let v1 = document.querySelector('input#valor1');
    let v2 = document.querySelector('input#valor2');
    let resultado = document.querySelect('div#resultado');
    let input1 = Number(v1.value);
    let input2 = Number(v2.value);
    let so = input1 + input2;

    resultado.innerHTML = `${so}`
}

function subtrair() {
    let v1 = document.querySelector('input#valor1');
    let v2 = document.querySelector('input#valor2');
    let resultado = document.querySelect('div#resultado');
    let input1 = Number(v1.value);
    let input2 = Number(v2.value);
    let su = input1 - input2;

    resultado.innerHTML = `${su}`
}

function dividir() {
    let v1 = document.querySelector('input#valor1');
    let v2 = document.querySelector('input#valor2');
    let resultado = document.querySelect('div#resultado');
    let input1 = Number(v1.value);
    let input2 = Number(v2.value);
    let di = input1 / input2;

    resultado.innerHTML = `${di}`
}

function multiplicar() {
    let v1 = document.querySelector('input#valor1');
    let v2 = document.querySelector('input#valor2');
    let resultado = document.querySelect('div#resultado');
    let input1 = Number(v1.value);
    let input2 = Number(v2.value);
    let mu = input1 * input2;

    resultado.innerHTML = `${mu}`
}
