let nomeIsOk;
function validaEmail(event) {
// pega o valor digitado no elemento input
    const inputEmail = event.target;
// cria uma expressão regular: <texto>@<texto>.<texto>
    var regex = /\S+@\S+\.\S+/;
 // se o email estiver correto muda a cor para verde
    if (regex.test(inputEmail.value)) {
        inputEmail.style.color = "green";
// caso contrário, para vermelho
    } else {
        inputEmail.style.color = "red";
    }
}

function validaTelefone(event) {
    const inputPhone = event.target;
    let formatedPhone = inputPhone.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
    inputPhone.value = !formatedPhone[2] ? formatedPhone[1] : '(' + formatedPhone[1] + ') ' + formatedPhone[2] + (formatedPhone[3] ? '-' + formatedPhone[3] : '');
}

function validaCPF(event) {
    const inputCPF = event.target;
    let formattedCPF = inputCPF.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,3})(\d{0,2})/);
    inputCPF.value = !formattedCPF[2] ? formattedCPF[1] : formattedCPF[1] + '.' + formattedCPF[2] + '.' + formattedCPF[3] + (formattedCPF[4] ? '-' + formattedCPF[4] : '');
}
