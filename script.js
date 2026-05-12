//durante o projeto, o indice do array é utilizado dversas vezes. 

//criação da lista para agrupar tarefas
let tarefas = []
let datas = []
let concluidas = []
let categorias = []

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
        usuario.value = "" // Limpar o campo de input após a atualização do nome   
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
    if (novaTarefa.trim() === "" || novaData.trim() === ""){
        mensagemErro2.textContent = "Digite uma matéria válida!"
        mensagemErro2.style.color = "red"
    }
    else {

        //Colocando arrays no localStorage
        if (localStorage.arr){
            tarefas = JSON.parse(localStorage.getItem("arr"))
        }
        tarefas.push(novaTarefa) //colocando a tarefa na array
        localStorage.arr = JSON.stringify(tarefas) //jogando array para dentro do localstorage
        

        if (localStorage.arrDate){
            datas = JSON.parse(localStorage.getItem("arrDate"))
        }
        datas.push(novaData)
        localStorage.arrDate = JSON.stringify(datas)
        
        concluidas.push(false) //o push é falso, pois a tarefa não está concluida (checkado? falso)
        localStorage.concluidas = JSON.stringify(concluidas)
        
        exibirTarefas()
        exibirDatas()
        atualizarContador()
        tarefaRecente()
        progresso()

        //mensagem de sucesso e limpeza do campo de input
        mensagemErro2.textContent = "Atividade adicionada com sucesso!"
        mensagemErro2.style.color = "green"
        materia.value = ""
        data.value = ""


        return{mensagemErro2}
        
}
}

function exibirTarefas(){
    const listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = "" //limpando a lista para evitar que as tarefas se repitam toda vez que uma nova for adicionada
    const listaDatas = document.getElementById("listaDatas")

    // laço de repetição para criar todas as linhas de tarefas 
    for(let i = 0; i < tarefas.length; i++){
        //Criando cada parte que sera adicionada na lista de tarefas
        let lista = document.createElement("li")
        lista.className = "tarefa" 
        
       
        let span = document.createElement("span")
        span.textContent = tarefas[i]

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.className = "checkbox" 
        checkbox.checked = concluidas[i] //já definir se eatava cocluida antes de renderizar
        checkbox.addEventListener("change", () =>{
            concluidas[i] = checkbox.checked //a array recebe o valor do indice como true quando muda
            if (concluidas[i] == true){
                span.className = "tarefaConcluida" //classe dada as tarefas concluidas para alterar no css
                listaDatas.children[i].className = "tarefaConcluida"

                atualizarContador()
                tarefaRecente()
                progresso()


            } 
        else {
                span.classList.remove("tarefaConcluida")
                listaDatas.children[i].classList.remove("tarefaConcluida")
                atualizarContador()
                tarefaRecente()
                progresso()
            }
        }) //atualiza ao mudar o estado da checkbox
        
        
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

    for (i = 0; i < datas.length; i++){
        
        let dataFormatada = datas[i].split("-") //separando cada elemento da data 
        let dia = dataFormatada[2]  //pegando cada parte da data pelo indice
        let mes = dataFormatada[1]
        
        // Confecção da linha de data e seus elementos
        lista = document.createElement('li')
        lista.textContent = dia + "/" + mes + " - " + tarefas[i]

        //Adição do agrupamento da linha dentro da aba lista de datas
        listaDatas.appendChild(lista) 
    }
}

function limparTarefa(i){
    tarefas.splice(i, 1)
    localStorage.arr = JSON.stringify(tarefas) //jogando array atualizada no localStorage
    
    datas.splice(i, 1)
    localStorage.arrDate = JSON.stringify(datas)
    
    concluidas.splice(i, 1) //removendo o estado da tarefa excluida
    
    exibirTarefas()
    exibirDatas()
    atualizarContador()
    tarefaRecente()
    progresso()
    }

function editarTarefa(i){
    let tarefaEditada = prompt("Digite a nova tarefa:")
    if (tarefaEditada.trim() !== ""){
        tarefas[i] = tarefaEditada
        exibirTarefas()
        exibirDatas()
        
        atualizarContador()
        tarefaRecente()
        progresso()
    }

}

function limparTudo (){
    
    tarefas.length = 0
    localStorage.arr = JSON.stringify(tarefas) //jogando array atualizada no localStorage
    
    datas.length = 0
    localStorage.arrDate = JSON.stringify(datas)
    
    concluidas.length = 0
    
    mensagemErro2.textContent = "Lista limpa com sucesso!"
    mensagemErro2.style.color = "blue"
    exibirTarefas()
    exibirDatas()
    atualizarContador()
    tarefaRecente()
    progresso()
}

function atualizarContador(){
    const cont = document.getElementById("cont")
    cont.textContent = concluidas.filter(Boolean).length + "/" + tarefas.length  //aumenta o contador a cada elemento novo da lista
}

function tarefaRecente(){
    const recente = document.getElementById("recente")
        if (concluidas.filter(Boolean).length == 0){
            recente.textContent = " - "  
        }
        else {
            recente.textContent = concluidas == true[concluidas.length - 1] //se as tarefas concluidas forem diferentes de 0, recebe a última da array
        }
    }

function progresso(){
    const progresso = document.getElementById("progresso")
    if (concluidas.filter(Boolean).length == 0){
        progresso.textContent = "0%"
    }
    else {
        let porcentagem = (concluidas.filter(Boolean).length / tarefas.length) * 100 //tarefas concluidas/todas as tarefas * 100
        progresso.textContent = porcentagem.toFixed(2) + "%" //número fixo com duas casas decimais
    }
}