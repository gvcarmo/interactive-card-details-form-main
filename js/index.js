const btnConfirm = document.querySelector('.confirm-btn');
const allInputs = document.querySelectorAll(".allInputs");
const todosInputs = document.querySelectorAll(".todosInputs");
const obrigatorio = document.querySelectorAll(".obrigatorio");

const primeiroInput = document.querySelector('.card-number');
const segundoInput = document.querySelector('.card-name');
const terceiroInput = document.querySelector('.card-date');
const quartoInput = document.querySelector('.card-cvc');

const formularioConfirmado = document.querySelector('.formulario');

const estadoCompleto = document.querySelector('.completed-state');

const btnConfirmado = document.querySelector('.continue');

btnConfirm.addEventListener("click", () => {
    todosInputs.forEach((input, index) => {
        if (input.value) {
            allInputs[index].classList.add("obrigatorio-ok");
            allInputs[index].classList.remove("obrigatorio-n");
            formularioConfirmado.classList.add("confirmado");
            estadoCompleto.classList.add("confirmado");
            const firstInput = todosInputs[0].value
            const secondInput = todosInputs[1].value
            const thirdInput = todosInputs[2].value
            const fourthInput = todosInputs[3].value
            const fifthInput = todosInputs[4].value
    
            primeiroInput.innerText = secondInput
            segundoInput.innerText = firstInput
            terceiroInput.innerText = `${thirdInput} / ${fourthInput} `
            quartoInput.innerText = fifthInput
    
        } else {
            allInputs[index].classList.remove("obrigatorio-n");
            allInputs[index].classList.add("obrigatorio-n");
        }


    })
})

btnConfirmado.addEventListener("click", () => {
    primeiroInput.innerText = `0000 0000 0000 0000`
    segundoInput.innerText = `JANE APPLESEED`
    terceiroInput.innerText = `00/00`
    quartoInput.innerText = `000`
    formularioConfirmado.classList.remove("confirmado");
    estadoCompleto.classList.remove("confirmado");
})
