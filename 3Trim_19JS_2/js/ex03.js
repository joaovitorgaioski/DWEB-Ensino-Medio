var dia

dia=parseInt(prompt("Que dia é hoje (1-Domingo 2-Segunda 3-Terça 4-Quarta 5-Quinta 6-Sexta 7-Sábado)?"))

switch(dia){
    case 1:
        alert("Hoje é domingo.")
        break;
    case 2:
        alert("Hoje é segunda.")
        break;
    case 3:
        alert("Hoje é terça.")
        break;
    case 4:
        alert("Hoje é quarta.")
        break;
    case 5:
        alert("Hoje é quinta.")
        break;
    case 6:
        alert("Hoje é sexta.")
        break;
    case 7:
        alert("Hoje é sábado.")
        break;
    default:
        alert("Hoje não existe.")
        break;
}