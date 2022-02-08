var botaoAdicionar = document.querySelector("#adicionar-usuario");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var nomeUsuario = form.nomeForm.value;
    var salarioBrutoUsuario = form.salarioBrutoForm.value;

    var usuarioTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var salarioBrutoTd = document.createElement("td");
    var descontoTd = document.createElement("td");
    var salarioLiquidoTd = document.createElement("td");

    nomeTd.textContent = nomeUsuario;
    salarioBrutoTd.textContent = salarioBrutoUsuario;   

    usuarioTr.appendChild(nomeTd);
    usuarioTr.appendChild(salarioBrutoTd);
    usuarioTr.appendChild(descontoTd);
    usuarioTr.appendChild(salarioLiquidoTd);

    var tabela = document.querySelector("#tabela-usuarios");
    tabela.appendChild(usuarioTr);
});