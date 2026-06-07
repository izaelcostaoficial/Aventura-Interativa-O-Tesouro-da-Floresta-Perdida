const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
   button.addEventListener('click', function(event){
       const atual = document.querySelector('.passo.ativo');
       // Usar event.target garante que pegamos o botão correto clicado
       const proximoPasso = 'passo-' + event.target.getAttribute('data-proximo');

       atual.classList.remove('ativo');
       document.getElementById(proximoPasso).classList.add('ativo');
   });
});


