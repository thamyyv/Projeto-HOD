//pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll(".btn");
const imagens = document.querySelectorAll(".img");
const texto = document.querySelectorAll(".infos");

//identificar o clique no botão
botoesCarrossel.forEach((btn, indice) => {
  btn.addEventListener("click", () => {

    //desmarcar o botão selecionado anterior
    desativarBotaoSelecionado();

    //marcar o próximo botão selecionado
    btn.classList.add("active");

    //esconder a imagem anteriormente selecionada
    esconderImagemAtiva();

    //mostrar a imagem do dragão clicado
    imagens[indice].classList.add("active");

    //mostrar o texto referente a imagem selecionada
    desativarTextoSelecionado();
    texto[indice].classList.add("active");
  });
});

function desativarTextoSelecionado() {
    const textoSelecionado = document.querySelector(".infos.active");
    textoSelecionado.classList.remove("active");
}

function esconderImagemAtiva() {
    const imagemSelecionada = document.querySelector(".img.active");
    imagemSelecionada.classList.remove("active");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".btn.active");
    botaoSelecionado.classList.remove("active");
}

