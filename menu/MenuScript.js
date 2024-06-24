document.addEventListener('DOMContentLoaded', function () {
    // Carrega o conteúdo da div do index.html
    fetch('../menu/MenuIndex.html')
        .then(response => response.text())
        .then(html => {
            const doc = new DOMParser().parseFromString(html, 'text/html');
            var div = doc.querySelector('#menu');
            if (div) {
                document.querySelector('#menuA').appendChild(div);
                const menu = document.getElementById("menu");
                const botão1 = document.getElementById("button1");
                const text1 = document.getElementById("button-p1");
                const textBox1 = document.getElementById("textbox1");
                const botão2 = document.getElementById("button2");
                const text2 = document.getElementById("button-p2");
                const textBox2 = document.getElementById("textbox2");
                const botão3 = document.getElementById("button3");
                const text3 = document.getElementById("button-p3");
                const textBox3 = document.getElementById("textbox3");
                const botão4 = document.getElementById("button4");
                const text4 = document.getElementById("button-p4");
                const textBox4 = document.getElementById("textbox4");
                const botão5 = document.getElementById("button5");
                const text5 = document.getElementById("button-p5");
                const textBox5 = document.getElementById("textbox5");
                const marcaBox = document.getElementById("marca-box");
                const logo = document.getElementById("logo");

                //Botão 1
                botão1.addEventListener('mouseover', function () {
                    menu.classList.add("BarraVai");
                    menu.classList.remove("BarraVolta");
                    menu.style.width = "22vw";
                    text1.classList.add("TextLeft");
                    text1.classList.remove("textRight");
                    text1.style.left = "0vw";
                    textBox1.classList.add("overflowOn");
                    textBox1.classList.remove("overflowOff");
                    textBox1.style.width = "16.5vw";
                    marcaBox.classList.add("marcaVai");
                    marcaBox.classList.remove("marcaVolta");
                    marcaBox.style.width = "22vw";
                });

                botão1.addEventListener('mouseout', function () {
                    menu.classList.add("BarraVolta");
                    menu.classList.remove("BarraVai");
                    menu.style.width = "6vw";
                    text1.classList.add("textRight");
                    text1.classList.remove("textLeft");
                    text1.style.left = "23vw";
                    textBox1.classList.add("overflowOff");
                    textBox1.classList.remove("overflowOn");
                    textBox1.style.width = "8.5vw";
                    marcaBox.classList.remove("marcaVai");
                    marcaBox.classList.add("marcaVolta");
                    marcaBox.style.width = "6vw";
                });
                //Segundo botão
                botão2.addEventListener('mouseover', function () {
                    menu.classList.add("BarraVai");
                    menu.classList.remove("BarraVolta");
                    menu.style.width = "22vw";
                    text2.classList.add("TextLeft");
                    text2.classList.remove("textRight");
                    text2.style.left = "0vw";
                    textBox2.classList.add("overflowOn");
                    textBox2.classList.remove("overflowOff");
                    textBox2.style.width = "16.5vw";
                    marcaBox.classList.add("marcaVai");
                    marcaBox.classList.remove("marcaVolta");
                    marcaBox.style.width = "22vw";
                });

                botão2.addEventListener('mouseout', function () {
                    menu.classList.add("BarraVolta");
                    menu.classList.remove("BarraVai");
                    menu.style.width = "6vw";
                    text2.classList.add("textRight");
                    text2.classList.remove("textLeft");
                    text2.style.left = "23vw";
                    textBox2.classList.add("overflowOff");
                    textBox2.classList.remove("overflowOn");
                    textBox2.style.width = "8.5vw";
                    marcaBox.classList.remove("marcaVai");
                    marcaBox.classList.add("marcaVolta");
                    marcaBox.style.width = "6vw";
                });
                //Botão 3
                botão3.addEventListener('mouseover', function () {
                    menu.classList.add("BarraVai");
                    menu.classList.remove("BarraVolta");
                    menu.style.width = "22vw";
                    text3.classList.add("TextLeft");
                    text3.classList.remove("textRight");
                    text3.style.left = "0vw";
                    textBox3.classList.add("overflowOn");
                    textBox3.classList.remove("overflowOff");
                    textBox3.style.width = "16.5vw";
                    marcaBox.classList.add("marcaVai");
                    marcaBox.classList.remove("marcaVolta");
                    marcaBox.style.width = "22vw";
                });

                botão3.addEventListener('mouseout', function () {
                    menu.classList.add("BarraVolta");
                    menu.classList.remove("BarraVai");
                    menu.style.width = "6vw";
                    text3.classList.add("textRight");
                    text3.classList.remove("textLeft");
                    text3.style.left = "23vw";
                    textBox3.classList.add("overflowOff");
                    textBox3.classList.remove("overflowOn");
                    textBox3.style.width = "8.5vw";
                    marcaBox.classList.remove("marcaVai");
                    marcaBox.classList.add("marcaVolta");
                    marcaBox.style.width = "6vw";
                });
                //Botão 4
                botão4.addEventListener('mouseover', function () {
                    menu.classList.add("BarraVai");
                    menu.classList.remove("BarraVolta");
                    menu.style.width = "22vw";
                    text4.classList.add("TextLeft");
                    text4.classList.remove("textRight");
                    text4.style.left = "0vw";
                    textBox4.classList.add("overflowOn");
                    textBox4.classList.remove("overflowOff");
                    textBox4.style.width = "16.5vw";
                    marcaBox.classList.add("marcaVai");
                    marcaBox.classList.remove("marcaVolta");
                    marcaBox.style.width = "22vw";
                });

                botão4.addEventListener('mouseout', function () {
                    menu.classList.add("BarraVolta");
                    menu.classList.remove("BarraVai");
                    menu.style.width = "6vw";
                    text4.classList.add("textRight");
                    text4.classList.remove("textLeft");
                    text4.style.left = "23vw";
                    textBox4.classList.add("overflowOff");
                    textBox4.classList.remove("overflowOn");
                    textBox4.style.width = "8.5vw";
                    marcaBox.classList.remove("marcaVai");
                    marcaBox.classList.add("marcaVolta");
                    marcaBox.style.width = "6vw";
                });
                //Botão 5
                botão5.addEventListener('mouseover', function () {
                    menu.classList.add("BarraVai");
                    menu.classList.remove("BarraVolta");
                    menu.style.width = "22vw";
                    text5.classList.add("TextLeft");
                    text5.classList.remove("textRight");
                    text5.style.left = "0vw";
                    textBox5.classList.add("overflowOn");
                    textBox5.classList.remove("overflowOff");
                    textBox5.style.width = "16.5vw";
                    marcaBox.classList.add("marcaVai");
                    marcaBox.classList.remove("marcaVolta");
                    marcaBox.style.width = "22vw";
                });

                botão5.addEventListener('mouseout', function () {
                    menu.classList.add("BarraVolta");
                    menu.classList.remove("BarraVai");
                    menu.style.width = "6vw";
                    text5.classList.add("textRight");
                    text5.classList.remove("textLeft");
                    text5.style.left = "23vw";
                    textBox5.classList.add("overflowOff");
                    textBox5.classList.remove("overflowOn");
                    textBox5.style.width = "8.5vw";
                    marcaBox.classList.remove("marcaVai");
                    marcaBox.classList.add("marcaVolta");
                    marcaBox.style.width = "6vw";
                });
                logo.addEventListener("mouseover", function () {
                    marcaBox.classList.add("marcaVai");
                    marcaBox.classList.remove("marcaVolta");
                    marcaBox.style.width = "22vw";
                    menu.classList.add("BarraVai");
                    menu.classList.remove("BarraVolta");
                    menu.style.width = "22vw";
                })
                logo.addEventListener("mouseout", function () {
                    marcaBox.classList.remove("marcaVai");
                    marcaBox.classList.add("marcaVolta");
                    marcaBox.style.width = "6vw";
                    menu.classList.add("BarraVolta");
                    menu.classList.remove("BarraVai");
                    menu.style.width = "6vw";
                })
            };
        });

    console.log('O DOM está completamente carregado!');
});