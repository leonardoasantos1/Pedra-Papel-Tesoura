const botoes = document.querySelectorAll('.botoes');
const resultado = document.getElementById('resultado');

function escolherElemento() {
    const elemento = ['Pedra', 'Papel', 'Tesoura'];
    const elementoAleatoio = Math.floor(Math.random() * 3);
    return elemento[elementoAleatoio];
};

function jogar(eu, pc) {
    if(eu === pc) {
        return "Empate!";
    } else if((eu === 'Pedra' && pc === 'Tesoura') || 
                (eu === 'Papel' && pc === 'Pedra') || 
                (eu === 'Tesoura' && pc === 'Papel')) 
            {
            return "Você ganhou!";
    } else {
        return "Você perdeu!";
    }
};

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const minhaEscolha = botao.innerHTML;
        const escolaDaMaquina = escolherElemento();
        const final = jogar(minhaEscolha, escolaDaMaquina);

        resultado.innerHTML = `Você escolheu ${minhaEscolha}, o Pc escolheu ${escolaDaMaquina}. ${final}`;
    });
});