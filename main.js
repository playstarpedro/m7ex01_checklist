$(document).ready(function(){

    //captura o acionamento do botão
    $('form').on('submit', function(e) {
        e.preventDefault();
        adicionaItem();
        })
    });

    //função que adiciona novos items
    function adicionaItem() {
        const novoItem = $('#novo-item').val();

        $('<li>').text(novoItem).appendTo('ul');
        $('#novo-item').val('')
    };

    //função que risca os items
    $('#lista').on('click', 'li', function() {
        console.log('clicado')
        $(this).toggleClass('riscado');
        $('✓').append(this);
    });