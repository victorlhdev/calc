var botaoAdicionar = document.querySelector("#adicionar-usuario");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var usuario = obtemUsuarioDoForm(form);
    var usuarioTr = montaTr(usuario);
    var tabela = document.querySelector("#tabela-usuarios");
    tabela.appendChild(usuarioTr);
    form.reset();
});

function obtemUsuarioDoForm(form) {
    var usuario = {
        nome: form.nomeForm.value,
        salarioBruto: form.salarioBrutoForm.value,
        desconto: calculaDesconto(form.salarioBrutoForm.value, aliquotaInss),
        salarioLiquido: calculaSalarioLiquido(form.salarioBrutoForm.value, calculaDesconto(form.salarioBrutoForm.value, aliquotaInss))
    }
    return usuario;
}

function montaTr(usuario) {
    var usuarioTr = document.createElement("tr");
    usuarioTr.classList.add("usuario");

    usuarioTr.appendChild(montaTd(usuario.nome, "info-nome"));
    usuarioTr.appendChild(montaTd(usuario.salarioBruto, "info-salarioBruto"));
    usuarioTr.appendChild(montaTd(usuario.desconto, "info-desconto"));
    usuarioTr.appendChild(montaTd(usuario.salarioLiquido, "info-salarioLiquido"));
    usuarioTr.appendChild(montaTd("", "bi-x-square-fill"));
    

    return usuarioTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}