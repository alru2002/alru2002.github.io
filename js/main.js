function Desplegar() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

window.onscroll = function(){
    CargarBarras();

}

function CargarBarras(){
    var hard = document.getElementById("hard")
    var distancia = window.innerHeight - hard.getBoundingClientRect().top;
    if (distancia >= 10){
        document.getElementById("python").classList.add("p1");
        document.getElementById("JAVA").classList.add("p2");
        document.getElementById("C").classList.add("p3");
        document.getElementById("C#").classList.add("p4");
        document.getElementById("HTML").classList.add("p5");
        document.getElementById("JS").classList.add("p6");
    }

}