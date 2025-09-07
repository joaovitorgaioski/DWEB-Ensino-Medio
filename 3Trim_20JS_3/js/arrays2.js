var frutas=[]
var i

for(i=0;frutas[i]!="fim";i++){
    frutas[i]=prompt("Adicione uma fruta à lista ('fim' para terminar):")
    if(frutas[i]=="fim"){
        frutas.pop()
    }
}

for(i=0;i<frutas.length;i++){
    document.write(frutas[i])
}