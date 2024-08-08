function validaEmail(event) {
    const inputEmail = event.target;
    var regex = /\S+@\S+\.\S+/;
    if (regex.test(inputEmail.value)) {
        inputEmail.style.color = "green";
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

function validaRenda(event) {
    const inputRenda = event.target;
    let valor = inputRenda.value.replace(/\D/g, "");
    
    valor = (valor / 100).toFixed(2) + "";
    valor = valor.replace(".", ",");
    valor = valor.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    
    inputRenda.value = `R$ ${valor}`;
}
