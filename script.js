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
    if (novoNome.trim() === ""){  // trim similar ao strip do python
        mensagemErro.textContent = "Digite um nome válido!"
        mensagemErro.style.color = "red"
    }  
    else {  //Código para quando o nome for válido
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
    let i = 0
    for(i; i < tarefas.length; i++){
        //Criando cada parte que sera adicionada na lista de tarefas
        let lista = document.createElement("li")
        lista.className = "tarefa" //adicionando uma classe para cada linha criada, para facilitar a estilizaçãoS
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.className = "checkbox" //adicionando uma classe para cada checkbox criado, para facilitar a estilização
        let span = document.createElement("span")
        span.textContent = tarefas[i]

        // Confecção da linha e seus elementos (especie de agrupamento de cada parte da linha)
        lista.appendChild(checkbox)  // Adicionar o checkbox à linha
        lista.appendChild(span)  // Adicionar o texto da tarefa na linha
        
        // Adicionando todo o agrupamento feito na linha dentro da aba lista
        listaTarefas.appendChild(lista)
}
}

function exibirDatas(){
    const listaDatas = document.getElementById("listaDatas")
    listaDatas.innerHTML = "" //limpando a lista para evitar que as tarefas se repitam toda vez que uma nova for adicionada

    // laço de repetição para criar todas as linhas de datas 
    i = 0
    for (i; i < datas.length; i++){
        //// Confecção da linha de data e seus elementos
        lista = document.createElement('li')
        lista.textContent = datas[i] + " - " + tarefas[i]
        //lista.style.color = "#25d164"

        //Adição do agrupamento da linha dentro da aba lista de datas
        listaDatas.appendChild(lista) 
    }
}