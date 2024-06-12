var menu = document.getElementById("menu")
var botão1 = document.getElementById("button1")

botão1.addEventListener('mouseover', function() {
    menu.classList.add("BarraVai");
    menu.classList.remove("barraParaTrás");
    menu.style.width = "22vw"
});
botão1.addEventListener('mouseout', function() {
    menu.classList.add("barraParaTrás");
    menu.classList.remove("BarraVai");
    menu.style.width = "14vw"
});