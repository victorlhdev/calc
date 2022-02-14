var tabela = document.querySelector("table");

tabela.addEventListener("click", function (event) {
    var target = event.target;
    if (target.classList.contains('bi-x-square-fill')) {
        target.closest('tr').classList.add("fadeOut");
        setTimeout(function () {
            target.closest('tr').remove();
        }, 500);
    }
});
