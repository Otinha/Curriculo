function traduzirPt(){
    //HEADER
    document.getElementById("home").innerHTML="HOME";
    document.getElementById("sobre").innerHTML="SOBRE MIM";
    document.getElementById("contato").innerHTML="CONTATO";
    
    //TITULOS
    document.getElementById("tituloContato").innerHTML="CONTATO";

    //FORM 
    document.getElementById("tituloFom").innerHTML="Ou entre em contato por aqui";
    document.getElementById("labelEmail").innerHTML="Email :";
    document.getElementById("labelMensagem").innerHTML="Mensagem :";

    //BOTAO
    document.getElementById("enviar").value = 'Enviar';
    
    //FOOTER
    document.getElementById("textoFooter").innerHTML="Todos os direitos reservados";
}

function traduzirEn(){
    //HEADER
    document.getElementById("home").innerHTML="HOME";
    document.getElementById("sobre").innerHTML="ABOUT ME";
    document.getElementById("contato").innerHTML="CONTACT";

    //TITULOS
    document.getElementById("tituloContato").innerHTML="CONTACT";
    document.getElementById("tituloFom").innerHTML="Or get in touch here";

    //FORM
    document.getElementById("labelEmail").innerHTML="Mail :";
    document.getElementById("labelMensagem").innerHTML="Message :";

    //BOTAO
    document.getElementById("enviar").value = 'Send';
    
    //FOOTER
    document.getElementById("textoFooter").innerHTML="All rights reserved.";
}