function enviar(){
  var nome,ok
  ok=false
  document.getElementById("user")
  if(user.value=="Zezinho" || user.value=="zezinho"){
      if(password.value=="12345abc"){
          alert("Login efetuado com sucesso")
          ok=true
      }
      else{
          alert("Senha incompatível")
      }
  }
  else{
      alert("Usuário incompatível")
  }
  return ok;
}