var usuarios = document.querySelectorAll(".usuario");

for (var i = 0; i < usuarios.length; i++) {

    var usuario = usuarios[i];

    var tdSalarioBruto = usuario.querySelector(".info-salarioBruto");
    var salarioBruto = tdSalarioBruto.textContent;

    var aliquotaInss = 0.075;

    var desconto = salarioBruto * aliquotaInss;
    var tdDesconto = usuario.querySelector(".info-desconto");
    tdDesconto.textContent = desconto.toFixed(2)

    var salarioLiquido = salarioBruto - desconto;
    var tdSalarioLiquido = usuario.querySelector(".info-salarioLiquido");
    tdSalarioLiquido.textContent = salarioLiquido.toFixed(2)
};

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








