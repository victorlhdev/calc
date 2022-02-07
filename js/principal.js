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








