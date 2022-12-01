function enviarForm(){
    var email = document.getElementById('email');
    var mensagem = document.getElementById('mensagem');

    if(email.value == "" && mensagem.value == ""){
        alert("Por favor, digite um email válido, e também a sua mensagem!");
    } else if(email.value == ""){
        alert("Por favor, digite um email válido!");
    } else if(mensagem.value == ""){
        alert("Por favor, digite a sua mensagem!");
    }else{
        alert("Email enviado com sucesso!");
    }

}