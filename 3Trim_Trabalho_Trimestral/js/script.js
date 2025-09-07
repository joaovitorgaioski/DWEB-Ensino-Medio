    //Acessa o formulário pelo getElementById e fica "escutando"/esperando através do addEventListener o evento(submint) 
document.getElementById("formcadastro").addEventListener("submit", function (event) {
    // Evita que a página reinicie
    event.preventDefault();

    // Coleta os valores do formulário
    const nome = document.getElementById('nome').value;
    const categoria = document.getElementById('categoria').value;
    const data = document.getElementById('data').value;
    const valor = document.getElementById('valor').value;
    const transacao = { nome, categoria, data, valor };

    // Carrega ou inicializa a lista de transações
    let lista_transacoes = JSON.parse(localStorage.getItem('lista_transacoes')) || [];
    const idEditar = document.getElementById('id-editar').value;

    // Verifica se vai editar ou adicionar transação
    if (idEditar) {
        // Edita a transação existente
        lista_transacoes[idEditar] = transacao;
        document.getElementById('id-editar').value = '';
    } else {
        // Adiciona uma nova transação
        lista_transacoes.push(transacao);
    }

    // Atualiza o localStorage e limpa o formulário
    localStorage.setItem('lista_transacoes', JSON.stringify(lista_transacoes));
    document.getElementById('formcadastro').reset();

    // Atualiza a exibição das transações e o resumo financeiro
    exibir_transacoes();
    calcular_resumo();
});

function exibir_transacoes() {
    //Carrega (chama) a lista de transações do LocalStorage ou inicializa a lista como vazio
    const lista_transacoes = JSON.parse(localStorage.getItem('lista_transacoes')) || [];
    const output = document.getElementById('output');
    // Limpa o conteúdo atual
    output.innerHTML = '';

    lista_transacoes.forEach((transacao, i) => {
        const li = document.createElement('li');
        li.textContent = `${transacao.nome} / ${transacao.categoria} / ${transacao.data} / ${transacao.valor}`;

        // Botões de Editar e Excluir
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => editar_transacao(i);

        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.onclick = () => excluir_transacao(i);

        // Aparece na página
        li.appendChild(btnEditar);
        li.appendChild(btnExcluir);
        output.appendChild(li);
    });
}

function editar_transacao(i) {
    // Chama a lista de transações do localStorage na função
    const lista_transacoes = JSON.parse(localStorage.getItem('lista_transacoes')) || [];
    const transacao = lista_transacoes[i];

    // Preenche o formulário com os dados da transação a ser editada
    document.getElementById('nome').value = transacao.nome;
    document.getElementById('categoria').value = transacao.categoria;
    document.getElementById('data').value = transacao.data;
    document.getElementById('valor').value = transacao.valor;
    document.getElementById('id-editar').value = i;
}

function excluir_transacao(i) {
    // Chama a lista de transações do localStorage na função
    // let pode ser declarada sem ser inicializada e pode ser alterada, const precisa ter um valor inicial e não pode ser alterada.
    let lista_transacoes = JSON.parse(localStorage.getItem('lista_transacoes')) || [];
    // Remove a transação
    // Exclui do array na posição index todos x elementos apartir desse index
    lista_transacoes.splice(i, 1);

    // Atualiza o localStorage
    localStorage.setItem('lista_transacoes', JSON.stringify(lista_transacoes));
    // Exibe
    exibir_transacoes();
    calcular_resumo();
}

function calcular_resumo() {
    // Chama a lista de transações do localStorage na função
    const lista_transacoes = JSON.parse(localStorage.getItem('lista_transacoes')) || [];
    let totalReceitas = 0, totalDespesas = 0;

    lista_transacoes.forEach(({ categoria, valor }) => {
        if (categoria === 'Receita') totalReceitas += parseFloat(valor);
        else if (categoria === 'Despesa') totalDespesas += parseFloat(valor);
    });

    const saldoFinal = totalReceitas - totalDespesas;

    // Atualiza o resumo financeiro
    document.getElementById('total-receitas').textContent = totalReceitas.toFixed(2);
    document.getElementById('total-despesas').textContent = totalDespesas.toFixed(2);
    document.getElementById('saldo-final').textContent = saldoFinal.toFixed(2);
}

// Inicializa a exibição ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    exibir_transacoes();
    calcular_resumo();
});
