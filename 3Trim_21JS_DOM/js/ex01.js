function somar(){
    var n1,n2,r,i
    n1=document.getElementById("primeirovalor").value
    n2=document.getElementById("segundovalor").value
    r=parseFloat(n1)+parseFloat(n2)
    //document.write("<h2>"+r+"</h2>")
    document.getElementById("resultado").innerHTML = `O resultado da soma é ${r}`
}