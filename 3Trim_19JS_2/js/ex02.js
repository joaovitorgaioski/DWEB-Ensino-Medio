var n1, n2, n3, media, f

n1=parseInt(prompt("Nota do 1° Trimestre: "))
n2=parseInt(prompt("Nota do 2° Trimestre: "))
n3=parseInt(prompt("Nota do 3° Trimestre: "))
f=parseInt(prompt("Frequência do aluno (em porcentagem): "))

media=(n1+n2+n3)/3
if(media>=7){
    if(f>=75){
        alert("Aprovado. (Média "+media+")")
    }
    else{
        alert("Você fará um exame! (Frequência menor que 75% e média "+media+")")
    }
}
else{
    alert("Reprovado. (Média "+media+")")
}