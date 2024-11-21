// Notificação de boas-vindas
alert('Bem-vindo ao nosso portfólio de tecnologia!');

// Alternar modo claro/escuro
document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Modo Claro/Teste';
    toggleButton.classList.add('btn', 'btn-secondary', 'my-3');
    document.querySelector('header').append(toggleButton);

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});

// Validação de formulário
document.getElementById('contactForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Formulário enviado com sucesso!');
});
