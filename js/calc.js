var usuarios = document.querySelectorAll(".usuario");

for (var i = 0; i < usuarios.length; i++) {

    var usuario = usuarios[i];

    var tdSalarioBruto = usuario.querySelector(".info-salarioBruto");
    var salarioBruto = tdSalarioBruto.textContent;

    var aliquotaInss = 0.075;

    var desconto = calculaDesconto(salarioBruto, aliquotaInss);
    var tdDesconto = usuario.querySelector(".info-desconto");
    tdDesconto.textContent = desconto

    var salarioLiquido = calculaSalarioLiquido(salarioBruto, desconto)
    var tdSalarioLiquido = usuario.querySelector(".info-salarioLiquido");
    tdSalarioLiquido.textContent = salarioLiquido
};

function calculaDesconto(salarioBruto, aliquotaInss) {
    var desconto = salarioBruto * aliquotaInss;
    return desconto.toFixed(2);
};

function calculaSalarioLiquido(salarioBruto, desconto) {
    var salarioLiquido = salarioBruto - desconto
    return salarioLiquido.toFixed(2);
};








