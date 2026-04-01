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
        document.getElementById("visitante").textContent = "SEJA BEM VINDO, " + novoNome
        mensagemErro.textContent = "Nome atualizado com sucesso!" 
        mensagemErro.style.color = 'green'
        usuario.value = " " // Limpar o campo de input após a atualização do nome   
    }

}


