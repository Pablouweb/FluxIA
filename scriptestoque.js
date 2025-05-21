// Aguarda até que o DOM (Document Object Model) esteja completamente carregado antes de executar o script.
// Isso garante que todos os elementos HTML estejam disponíveis para serem manipulados pelo JavaScript.
document.addEventListener('DOMContentLoaded', () => {

    // Obtém a referência para o botão de alternar tema usando seu ID.
    const themeToggle = document.getElementById('theme-toggle');

    // Obtém a referência para o elemento <body> do documento.
    // A classe 'dark-mode' será adicionada ou removida deste elemento para mudar o tema.
    const body = document.body;

    // Função para definir o tema do painel.
    // Recebe uma string 'theme' ('claro' ou 'escuro') como argumento.
    const setTheme = (theme) => {
        // Verifica se o tema desejado é 'escuro'.
        if (theme === 'escuro') {
            // Adiciona a classe 'dark-mode' ao body. Esta classe é usada no CSS para aplicar os estilos do modo escuro.
            body.classList.add('dark-mode');
            // Salva a preferência do tema no Local Storage do navegador.
            // Isso permite que o tema escolhido persista mesmo após o usuário fechar e reabrir o navegador.
            localStorage.setItem('tema', 'escuro'); // Salva 'tema' como chave e 'escuro' como valor
        } else {
            // Remove a classe 'dark-mode' do body, revertendo para o tema claro (estilos padrão do CSS).
            body.classList.remove('dark-mode');
            // Salva a preferência do tema 'claro' no Local Storage.
            localStorage.setItem('tema', 'claro'); // Salva 'tema' como chave e 'claro' como valor
        }
    };

    // Ao carregar a página, verifica se há uma preferência de tema salva no Local Storage.
    const savedTheme = localStorage.getItem('tema'); // Obtém o valor associado à chave 'tema'

    // Se uma preferência de tema foi encontrada no Local Storage...
    if (savedTheme) {
        // ...aplica o tema salvo chamando a função setTheme com o valor recuperado.
        setTheme(savedTheme);
    } else {
        // Se nenhuma preferência de tema foi encontrada no Local Storage...
        // ...define o tema padrão como 'claro'.
        setTheme('claro'); // Define o tema padrão como 'claro'
    }

    // Adiciona um listener de evento de 'click' ao botão de alternar tema.
    // Esta função será executada sempre que o botão for clicado.
    themeToggle.addEventListener('click', () => {
        // Verifica se o body já possui a classe 'dark-mode' (ou seja, se o tema atual é escuro).
        if (body.classList.contains('dark-mode')) {
            // Se estiver no modo escuro, chama setTheme para mudar para o tema 'claro'.
            setTheme('claro');
        } else {
            // Se não estiver no modo escuro (ou seja, está no modo claro), chama setTheme para mudar para o tema 'escuro'.
            setTheme('escuro');
        }
    });
});
