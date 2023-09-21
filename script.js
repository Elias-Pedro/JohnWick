let textBntHeader = document.querySelectorAll(".textBntHeader")
let btnFecharMenu = document.querySelector(".btnFecharMenu")
let btnAbrirMenu = document.querySelector(".btnAbrirMenu")

function abrirMenu(){
    for (let i = 0; i < textBntHeader.length; i++) {
        textBntHeader[i].style.display = "block"
        textBntHeader[i].style.margin = "0px 10px"
    }
    btnAbrirMenu.style.display = "none"
    btnFecharMenu.style.display = "block"

    document.querySelector("header").classList.add("menuAberto")
    document.querySelector("header").classList.remove("menuFechado")
}
function fecharMenu(){
    for (let i = 0; i < textBntHeader.length; i++) {
        textBntHeader[i].style.display = "none"
        textBntHeader[i].style.margin = "0px 0px"
    }
    btnAbrirMenu.style.display = "block"
    btnFecharMenu.style.display = "none"

    document.querySelector("header").classList.add("menuFechado")
    document.querySelector("header").classList.remove("menuAberto")

}


fecharInfosMaisFilmes(1)
fecharInfosMaisFilmes(2)
fecharInfosMaisFilmes(3)
fecharInfosMaisFilmes(4)
maisFilmes(3)

function maisFilmes(indice){
    fecharInfosMaisFilmes(3)

    document.querySelector(".nomeMaisFilmes" + indice).style.display = "flex"
    document.querySelector(".cntrTrailerMaisFilmes" + indice).style.height = "30%"
    document.querySelector(".imgMaisFilmes" + indice).style.borderRadius = "0px 10px 10px 0px"
}

function fecharInfosMaisFilmes(indice){
    document.querySelector(".nomeMaisFilmes" + indice).style.display = "none"
    document.querySelector(".cntrTrailerMaisFilmes" + indice).style.height = "24%"
    document.querySelector(".imgMaisFilmes" + indice).style.borderRadius = "10px"
}
