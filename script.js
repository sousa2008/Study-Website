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
    //Craindo cada parte que sera adicionada na lista de tarefas
    let lista = document.createElement("li")
    let checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    let span =document.createElement("span")
    span.textContent = novaTarefa

    /////adcionando na linha da lista 
    lista.appendChild(checkbox) // Adicionar o checkbox à tarefa
    lista.appendChild(span) // Adicionar o texto da tarefa ao elemento de lista
    // Adicionar o elemento de lista à lista de tarefas
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.appendChild(lista)

    //lista para adcionar data junto (esperando aprender mais para poder fazer)
    let lista2 = document.createElement('li')
    lista2.textContent = novaData + " - " + novaTarefa
    const listaDatas = document.getElementById("listaDatas")
    listaDatas.appendChild(lista2) 
    
    mensagemErro2.textContent = "Atividade adicionada com sucesso!"
    mensagemErro2.style.color = "green"
    usuario.value = " "
}


}


