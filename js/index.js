const btnMobile = document.getElementById('btn-mobile'); /* Adicionando uma função ao botão */

function toggleMenu () { /* função para adicionar ou remover class="active" na tag <nav> */
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}


btnMobile.addEventListener('click', toggleMenu); /* Quando houver o click ativa a função toggleMenu */