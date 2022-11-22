//Email

let email = document.querySelector('#email')
let emailErro = document.querySelector('#emailErro')
let emailOk = false
email.addEventListener('keyup', verifyEmail)

function verifyEmail () {
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        emailErro.innerHTML = 'Email inválido'
    } else {
        emailErro.innerHTML = ' '
        emailOk = true
    }
}


//Telefone

let telefone = document.querySelector('#telefone')
let telefoneErro = document.querySelector('#telefoneErro')
let telefoneOk = false
telefone.addEventListener('keyup', verifyTelefone)

function verifyTelefone () {
    if(telefone.value.length <= 8 ){
        telefoneErro.innerHTML = 'Número inválido'
    } else {
        telefoneErro.innerHTML = ' '
        telefoneOk = true
    }
}

//Texto
let texto = document.querySelector('#texto')
let textoErro = document.querySelector('#textoErro')
let textoOk = false
texto.addEventListener('keyup', verifyTexto)

function verifyTexto () {
    if(texto.value.length >= 100){
        textoErro.innerHTML = 'Número de carácteres excedido (Máx: 100 carácteres).'
    } else {
        textoErro.innerHTML = ' '
        textoOk = true
    }
}

//Botao

let botao = document.querySelector('#botao')
botao.addEventListener('click', enviar)

function enviar () {
    if(emailOk && telefoneOk && textoOk) {
        alert('Mensagem enviada com sucesso.')
    } else {
        alert('Verifique se os campos estão preenchidos corretamente.')
    }
}