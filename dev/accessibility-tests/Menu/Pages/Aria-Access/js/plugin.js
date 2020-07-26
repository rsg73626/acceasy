window.onload = acessibiliza;

function acessibiliza() {

    //mapeamento de divs
    var p = document.getElementsByClassName('acessivel');
    for (i = 0; i < p.length; i++) {
        p[i].setAttribute('aria-label', p[i].innerHTML);
        p[i].setAttribute('tabindex', '1');
    }

    //mapeamento de menus
    var menus = document.getElementsByClassName('menu-acessivel');
    for (i = 0; i < menus.length; i++) {
        menus[i].setAttribute('aria-label', 'Ítens listados em um menu acessível');
        menus[i].setAttribute('tabindex', '1');
        menus[i].setAttribute('role', 'menubar');
        //menus[i].setAttribute('role', 'navigation');
    }

    var item_menu = $(".menu-acessivel li a");
    for (i = 0; i < item_menu.length; i++) {
        item_menu[i].setAttribute('aria-label', item_menu[i].innerHTML);
        item_menu[i].setAttribute('tabindex', '1');
        item_menu[i].setAttribute('role', 'menuitem');
    }

    //mapeamento de botões
    var button = document.getElementsByClassName('botao-acessivel');
    for (i = 0; i < button.length; i++) {
        button[i].setAttribute('aria-label', button[i].innerHTML);
        button[i].setAttribute('tabindex', '1');
        button[i].setAttribute('role', 'button');
    }

    //mapeamento de textos
    var text = document.getElementsByClassName('texto-acessivel');
    for (i = 0; i < text.length; i++) {
        text[i].setAttribute('tabindex', '1');
        text[i].setAttribute('role', 'article');
        text[i].setAttribute('aria-label', text[i].innerHTML);
    }

    //mapeamento de links
    var link = document.getElementsByClassName('link-acessivel');
    for (i = 0; i < link.length; i++) {
        link[i].setAttribute('aria-label', link[i].innerHTML);
        link[i].setAttribute('tabindex', '1');
        link[i].setAttribute('role', 'article');
    }

    //mapeamento de item de menu
    var item_menu = $(".menu-acessivel a");
    for (i = 0; i < item_menu.length; i++) {
        item_menu[i].setAttribute('aria-label', item_menu[i].innerHTML);
        item_menu[i].setAttribute('tabindex', '1');
        item_menu[i].setAttribute('role', 'menuitem');
    }

    //Imagens
    var imagem = $(".imagem-acessivel");
    for (i = 0; i < imagem.length; i++) {
        imagem[i].setAttribute('aria-label', imagem[i].alt);
        imagem[i].setAttribute('tabindex', '1');
    }

    //Table
    var tabela_th = $(".tabela-acessivel thead tr th");
    for (i = 0; i < tabela_th.length; i++) {
        tabela_th[i].setAttribute('aria-label', tabela_th[i].innerHTML);
        tabela_th[i].setAttribute('tabindex', '1');
        //item_menu[i].setAttribute('role', 'menuitem');
    }

    var tabela_td = $(".tabela-acessivel tbody tr td");
    for (i = 0; i < tabela_td.length; i++) {
        tabela_td[i].setAttribute('aria-label', tabela_td[i].innerHTML);
        tabela_td[i].setAttribute('tabindex', '1');
        //item_menu[i].setAttribute('role', 'menuitem');
    }

    //Forms
    var form_elements_inputs = $(".form-acessivel input");
    for (i = 0; i < form_elements_inputs.length; i++) {
        form_elements_inputs[i].setAttribute('aria-label', form_elements_inputs[i].placeholder);
        form_elements_inputs[i].setAttribute('tabindex', '1');
    }

    var form_elements_text_area = $(".form-acessivel textarea");
    for (i = 0; i < form_elements_text_area.length; i++) {
        form_elements_text_area[i].setAttribute('aria-label', form_elements_text_area[i].placeholder);
        form_elements_text_area[i].setAttribute('tabindex', '1');
    }

    var form_elements_select = $(".form-acessivel select");
    for (i = 0; i < form_elements_select.length; i++) {
        form_elements_select[i].setAttribute('aria-label', "Selecione uma opção");
        form_elements_select[i].setAttribute('tabindex', '1');
    }

    var form_elements_select_option = $(".form-acessivel select option");
    for (i = 0; i < form_elements_select_option.length; i++) {
        form_elements_select_option[i].setAttribute('aria-label', form_elements_select_option[i].innerHTML);
        form_elements_select_option[i].setAttribute('tabindex', '1');
    }

    var form_elements_button = $(".form-acessivel button");
    for (i = 0; i < form_elements_button.length; i++) {
        form_elements_button[i].setAttribute('aria-label', form_elements_button[i].innerHTML);
        form_elements_button[i].setAttribute('tabindex', '1');
        form_elements_button[i].setAttribute('role', 'button');
    }

    var currCell = $('td').first();
// User navigates table using keyboard
    $('table').keydown(function (e) {
        var c = "";
        if (e.which == 39) {
            // Right Arrow
            c = currCell.next();
        } else if (e.which == 37) {
            // Left Arrow
            c = currCell.prev();
        } else if (e.which == 38) {
            // Up Arrow
            c = currCell.closest('tr').prev().find('td:eq(' +
                    currCell.index() + ')');
        } else if (e.which == 40) {
            // Down Arrow
            c = currCell.closest('tr').next().find('td:eq(' +
                    currCell.index() + ')');
        } else if (!editing && (e.which == 13 || e.which == 32)) {
            // Enter or Spacebar - edit cell
            e.preventDefault();
            edit();
        } else if (!editing && (e.which == 9 && !e.shiftKey)) {
            // Tab
            e.preventDefault();
            c = currCell.next();
        } else if (!editing && (e.which == 9 && e.shiftKey)) {
            // Shift + Tab
            e.preventDefault();
            c = currCell.prev();
        }

        // If we didn't hit a boundary, update the current cell
        if (c.length > 0) {
            currCell = c;
            currCell.focus();
        }
    });


}
