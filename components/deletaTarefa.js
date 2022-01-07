const deletarTarefa = (e) => {
    const botaoDeleta = e.target;

    const tarefaCompleta = botaoDeleta.parentElement;

    tarefaCompleta.remove();
}

const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button');
    botaoDeleta.classList.add('delete-button')
    botaoDeleta.innerText = 'deletar';

    botaoDeleta.addEventListener('click', deletarTarefa);

    return botaoDeleta
}

export default BotaoDeleta;