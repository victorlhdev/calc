var tabela = document.querySelector("table");

tabela.addEventListener("click", function (event) {
    var target = event.target;
    if (target.classList.contains('bi-x-square-fill')) {
        target.closest('tr').remove();
    }
});
