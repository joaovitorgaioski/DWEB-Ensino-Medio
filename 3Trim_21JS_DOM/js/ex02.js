function enviar() {
    var nome, email, ok
    ok = false
    document.getElementById("nome")
    document.getElementById("email")
    if (nome.value != "" && nome.value.indexOf(" ") != -1) {
        if (email.value.indexOf("@") != -1) {
            alert(nome.value + " agradecemos o seu contato!")
            ok = true
        }
        else {
            alert("Digite um Email válido!")
        }
    }
    else {
        alert("O campo nome não pode estar vazio")
    }
    return ok;
}