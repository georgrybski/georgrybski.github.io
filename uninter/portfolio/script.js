function openTab(tabName) {
    var i, tabcontent;
    // Recupera todos os elementos de conteúdo de aba
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // Mostra o conteúdo da aba selecionada
    document.getElementById(tabName).style.display = "block";
}

window.onload = function() {
    // Inicializa com a aba 'Sobre Mim' aberta
    openTab('about');
};