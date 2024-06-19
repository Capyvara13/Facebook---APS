//Next button
var nextL = document.getElementById("nextL");
var nextR = document.getElementById("nextR");
var pagInd = document.getElementById("pagInd");

//Funções para aumentar o valor da página
var pagNumber = 1;

nextL.addEventListener("click", function () {
    if (pagNumber > 1) {
        pagNumber -= 1;
        pagInd.innerText = `Página ${pagNumber}`;
    }
});

nextR.addEventListener("click", function () {
    if (pagNumber < 4) {
        pagNumber += 1;
        pagInd.innerText = `Página ${pagNumber}`;
    }
});

pagInd.innerText = `Página ${pagNumber}`;
//Mostrar qual página está!
function verificarPagNumber() {
    var divText2 = document.getElementById("divText2");
    var divText1 = document.getElementById("divText1");
    var divText3 = document.getElementById("divText3");
    var divText4 = document.getElementById("divText4");
    if (pagNumber == 1) {
        divText1.style.visibility = "visible";
        divText2.style.visibility = "hidden";
        divText3.style.visibility = "hidden";
        divText4.style.visibility = "hidden";
    } else if (pagNumber == 2) {
        divText2.style.visibility = "visible";
        divText1.style.visibility = "hidden";
        divText3.style.visibility = "hidden";
        divText4.style.visibility = "hidden";
    } else if (pagNumber == 3) {
        divText3.style.visibility = "visible";
        divText2.style.visibility = "hidden";
        divText1.style.visibility = "hidden";
        divText4.style.visibility = "hidden";
    } else if (pagNumber == 4) {
        divText4.style.visibility = "visible";
        divText2.style.visibility = "hidden";
        divText3.style.visibility = "hidden";
        divText1.style.visibility = "hidden";
    }
}

setInterval(verificarPagNumber, 100);