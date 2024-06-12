var menu = document.getElementById("menu");
var botão1 = document.getElementById("button1");
var text1 = document.getElementById("button-p1");
var textBox1 = document.getElementById("textbox1")

botão1.addEventListener('mouseover', function() {
    menu.classList.add("BarraVai");
    menu.classList.remove("BarraVolta");
    menu.style.width = "22vw";
    text1.classList.add("TextLeft");
    text1.classList.remove("textRight");
    text1.style.left = "0vw";
    textBox1.classList.add("overflowOn")
    textBox1.classList.remove("overflowOff")
    textBox1.style.width = "16.5vw"
});

botão1.addEventListener('mouseout', function() {
    menu.classList.add("BarraVolta");
    menu.classList.remove("BarraVai");
    menu.style.width = "14vw";
    text1.classList.add("textRight");
    text1.classList.remove("textLeft");
    text1.style.left = "23vw";
    textBox1.classList.add("overflowOff")
    textBox1.classList.remove("overflowOn")
    textBox1.style.width = "8.5vw"
});