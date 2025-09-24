/*Acessa o formulário através do getElementById e fica "escutando"/esperando através do addEventListener o evento(submit)  que ocorrerá no caso de um click no botão cadastrar. 
Quando isso ocorre ele executa a função anonima function(event) desencadeando as ações desejadas* */
document.getElementById("formcadastro").addEventListener("submit",function(event)
{
    /*Não deixa carregar uma nova página */
    event.preventDefault();
    /*Declara as variáveis e pega os valores da caixa de texto*/ 
    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    /*Atribui nome e idade para o objeto aluno*/
   var aluno= {nome:nome, idade:idade}
    /*Criar lista de alunos, carrega o aquivo do LocalStorage se houver, caso não exista cria uma lista vazia*/
    var lista_alunos= JSON.parse(localStorage.getItem('lista_alunos')) || [];
   /*Insere o aluno digitado na caixa de texto na lista*/
    lista_alunos.push(aluno)
    /*Adiciona o aluno ao LocalStorage */
    localStorage.setItem('lista_alunos',JSON.stringify(lista_alunos))
    /*Limpa o formulário*/
    document.getElementById('formcadastro').reset()
    
    //chama a função exibir alunos que irá exibir a listagem de alunos
    exibir_alunos()
})

function exibir_alunos(){
    //Carrega a lista de alunos do LocalStorage ou inicializa a lista como vazio
   
    var lista_alunos=JSON.parse(localStorage.getItem('lista_alunos'))||[];
    //alert(lista_aluno[5].nome)
    /* Acessa o elemento output no documento HTML*/
    var output=document.getElementById('output')
    // Limpa o conteúdo atual
    output.innerHTML= '';
    for(let i=0;i<lista_alunos.length;i++) 
        {
            //Cria a variável li e cria o elemento (tag) li 
            let li= document.createElement('li')
            li.textContent = 'Nome: '+lista_alunos[i].nome+', Idade: '+ lista_alunos[i].idade;
            output.appendChild(li)
        }

}


