//Gabriel Kesley da Silva Cesário
function fazerPedido() {
    const nome = document.getElementById('nome').value.trim();
    
    if (nome === "") {
        alert("Por favor, preencha o nome antes de fazer o pedido.");
        return;
    }

    const tamanhoPizza = document.querySelector('input[name="tamanho"]:checked');
    
    if (!tamanhoPizza) {
        alert("Por favor, selecione o tamanho da pizza.");
        return;
    }

    const adicionaisSelecionados = document.querySelectorAll('input[name="adicionais"]:checked');
    let valorAdicionais = 0;
    
    adicionaisSelecionados.forEach(function(adicional) {
        valorAdicionais += parseFloat(adicional.value);
    });

    const valorPizza = parseFloat(tamanhoPizza.value);

    const valorTotal = valorPizza + valorAdicionais;

    const valorTotalElement = document.querySelector('h2 strong');
    valorTotalElement.textContent = valorTotal.toFixed(2).replace('.', ',');
}
