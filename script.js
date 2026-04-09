//durante o projeto, o indice do array é utilizado dversas vezes. 

//criação da lista para agrupar tarefas
let tarefas = []
let datas = []

function mudarNome (){
    // Declarar o valor do input e puxar ele com "novoNome"
    let usuario = document.getElementById("usuario")
    let novoNome = usuario.value
    
    // Declarar o paragrafo de erro 
    let mensagemErro = document.getElementById("mensagemErro")
    
    // Criar validação verificando se o nome está vazio 
    if (novoNome.trim() === ""){  
        mensagemErro.textContent = "Digite um nome válido!"
        mensagemErro.style.color = "red"
    }  
    else {  
        document.getElementById("visitante").textContent = "SEJA BEM VINDO, " + novoNome + "!"
        mensagemErro.textContent = "Nome atualizado com sucesso!" 
        mensagemErro.style.color = 'green'
        usuario.value = " " // Limpar o campo de input após a atualização do nome   
    }
}

function adicionartarefa(){
// ler a tarefa que o usuário digitar
        const materia = document.getElementById("materia")
        let novaTarefa = materia.value
        
        const data = document.getElementById("data")
        let novaData = data.value
    
    
 // Declarar o paragrafo de erro 
        const mensagemErro2 = document.getElementById("mensagemErro2")
    if (novaTarefa.trim() === "" || novaData.trim() === "") {
        mensagemErro2.textContent = "Digite uma matéria válida!"
        mensagemErro2.style.color = "red"
    }
    else {
        tarefas.push(novaTarefa) //colocando a tarefa na array
        datas.push(novaData)
        exibirTarefas()
        exibirDatas()

        //mensagem de sucesso e limpeza do campo de input
        mensagemErro2.textContent = "Atividade adicionada com sucesso!"
        mensagemErro2.style.color = "green"
        materia.value = " "
        data.value = " "
}
}

function exibirTarefas(){
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = "" //limpando a lista para evitar que as tarefas se repitam toda vez que uma nova for adicionada

    // laço de repetição para criar todas as linhas de tarefas 
    for(let i = 0; i < tarefas.length; i++){
        //Criando cada parte que sera adicionada na lista de tarefas
        let lista = document.createElement("li")
        lista.className = "tarefa" 
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.className = "checkbox" 
        let span = document.createElement("span")
        span.textContent = tarefas[i]
        
        //criando botão de excluir
        let botaoExcluir = document.createElement("button")
        botaoExcluir.textContent = "Excluir"
        botaoExcluir.className = "botaoExcluir"
        botaoExcluir.onclick = () => {limparTarefa(i)} //chamando a função de excluir tarefa, passando o indice da tarefa a ser excluida

        //criando botão de editar
        let botaoEditar = document.createElement("button")
        botaoEditar.textContent = "Editar"
        botaoEditar.className = "botaoEditar"
        botaoEditar.onclick = () => {editarTarefa(i)} //chamando a função de editar tarefa, passando o indice da tarefa a ser editada

        // Confecção da linha e seus elementos (especie de agrupamento de cada parte da linha)
        lista.appendChild(checkbox)
        lista.appendChild(span)  
        lista.appendChild(botaoExcluir)
        lista.appendChild(botaoEditar) 
        
        // Adicionando todo o agrupamento feito na linha dentro da aba lista
        listaTarefas.appendChild(lista)
}
}

function exibirDatas(){
    const listaDatas = document.getElementById("listaDatas")
    listaDatas.innerHTML = "" 

    // laço de repetição para criar todas as linhas de datas 
    i = 0
    for (i; i < datas.length; i++){
        
        // Confecção da linha de data e seus elementos
        lista = document.createElement('li')
        lista.textContent = datas[i] + " - " + tarefas[i]

        //Adição do agrupamento da linha dentro da aba lista de datas
        listaDatas.appendChild(lista) 
    }
}

function limparTarefa(i){
    tarefas.splice(i, 1)
    datas.splice(i, 1)
    exibirTarefas()
    exibirDatas()
    }

function editarTarefa(i){
    let tarefaEditada = prompt("Digite a nova tarefa:")
    if (tarefaEditada.trim() !== ""){
        tarefas[i] = tarefaEditada
        exibirTarefas()
        exibirDatas()
    }

}

function limparTudo (){
    tarefas.length = 0
    datas.length = 0
    mensagemErro2.textContent = "Lista limpa com sucesso!"
    mensagemErro2.style.color = "blue"
    exibirTarefas()
    exibirDatas()
}