var nome, idade

nome=prompt("Qual es su nombre?")
idade=parseInt(prompt("Qual a sua idade?"))

if(idade>=18){
    alert(nome+" ,você é MAIOR de idade.")
}
else{
    alert(nome+" ,você é MENOR de idade.")
}