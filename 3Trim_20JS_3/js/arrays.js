var a=[4, 8, 3, 5 ,9]

/*
//Exibindo os Arrays e alterando valores
alert(a)
alert(a[4])
a[0]=7
alert(a[0])

//Percorrendo o vetor com laço de repetição
var i
for(i=0;i<a.length;i++){
    document.write("<h2>"+a[i]+"</h2>")
}
*/

//Vetores usandos como lista
lista=["Gervronelson","Estrada A",910,80.5,true]
alert(lista)
for(var i=0;i<lista.length;i++){
    document.write("<h2>"+lista[i]+"</h2>")
}
//Adicionando elementos ao final da lista
lista.push("84500.000")
alert(lista)

//Removendo elementos da lista
lista.pop()
alert(lista)
//Removendo o primeiro elemento da lista
lista.shift()
alert(lista)

//Adicionando elemento no primeiro item da lista
lista.unshift("Gervrásinho")
alert(lista)