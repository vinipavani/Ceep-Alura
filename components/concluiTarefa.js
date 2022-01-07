const concluirTarefa = (e) => {
    const botaoConclui = e.target;

    const tarefaCompleta = botaoConclui.parentElement;

    tarefaCompleta.classList.toggle('done');
}

const BotaoConclui = () => {
    const botaoConclui = document.createElement('button');
    botaoConclui.classList.add('check-button');
    botaoConclui.innerText = 'concluir';

    botaoConclui.addEventListener('click', concluirTarefa);

    return botaoConclui;
}

export default BotaoConclui;