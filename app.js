// === ESTADO DO JOGO ===
const state = {
    players: [],
    mode: 1,
    imposterIndex: -1,
    currentWordObj: null,
    currentPlayerTurn: 0,
    votes: {},
    availableWordsMode1: [],
    availableWordsMode2: []
};

// === ELEMENTOS DA DOM ===
const screens = {
    setup: document.getElementById('setup-screen'),
    pass: document.getElementById('pass-screen'),
    word: document.getElementById('word-screen'),
    voting: document.getElementById('voting-screen'),
    result: document.getElementById('result-screen')
};

const UI = {
    playerInput: document.getElementById('player-input'),
    addPlayerBtn: document.getElementById('add-player-btn'),
    playersList: document.getElementById('players-list'),
    startGameBtn: document.getElementById('start-game-btn'),
    gameMode: document.getElementById('game-mode'),
    passPlayerName: document.getElementById('pass-player-name'),
    confirmPlayerBtn: document.getElementById('confirm-player-btn'),
    viewingPlayerName: document.getElementById('viewing-player-name'),
    secretWord: document.getElementById('secret-word'),
    hintText: document.getElementById('hint-text'),
    hideWordBtn: document.getElementById('hide-word-btn'),
    votingList: document.getElementById('voting-list'),
    restartBtn: document.getElementById('restart-btn')
};

// === INICIALIZAÇÃO DOS DADOS ===
// Junta todas as palavras de todos os temas em um vetor unidimensional (panelão).
function initializeWordPools() {
    state.availableWordsMode1 = [];
    Object.values(gameDatabase.mode1).forEach(themeArray => {
        state.availableWordsMode1.push(...themeArray);
    });
    
    state.availableWordsMode2 = [];
    Object.values(gameDatabase.mode2).forEach(themeArray => {
        state.availableWordsMode2.push(...themeArray);
    });
}

// Executa a carga inicial
initializeWordPools();

// === LÓGICA DE NAVEGAÇÃO ===
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// === TELA 1: SETUP ===
UI.addPlayerBtn.addEventListener('click', () => {
    const name = UI.playerInput.value.trim();
    if (name && !state.players.includes(name)) {
        state.players.push(name);
        updatePlayersList();
        UI.playerInput.value = '';
    }
});

function updatePlayersList() {
    UI.playersList.innerHTML = '';
    state.players.forEach((player, index) => {
        const li = document.createElement('li');
        li.textContent = player;
        
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'X';
        removeBtn.style.padding = '2px 8px';
        removeBtn.onclick = () => {
            state.players.splice(index, 1);
            updatePlayersList();
        };
        
        li.appendChild(removeBtn);
        UI.playersList.appendChild(li);
    });
    
    UI.startGameBtn.disabled = state.players.length < 3;
}

UI.startGameBtn.addEventListener('click', () => {
    state.mode = parseInt(UI.gameMode.value);
    setupMatch();
    state.currentPlayerTurn = 0;
    preparePassScreen();
});

// === PREPARAÇÃO DA PARTIDA ===
function setupMatch() {
    // Sorteia o impostor
    state.imposterIndex = Math.floor(Math.random() * state.players.length);
    
    // Define qual vetor de palavras usar
    let pool = state.mode === 1 ? state.availableWordsMode1 : state.availableWordsMode2;
    
    // Recarrega o vetor silenciosamente se as palavras esgotarem
    if (pool.length === 0) {
        initializeWordPools();
        pool = state.mode === 1 ? state.availableWordsMode1 : state.availableWordsMode2;
    }

    // Sorteia e remove a palavra do vetor permanentemente (até a página ser atualizada ou esgotar)
    const randomIndex = Math.floor(Math.random() * pool.length);
    state.currentWordObj = pool.splice(randomIndex, 1)[0];
}

// === TELA 2 & 3: CICLO DE PASSAR O CELULAR ===
function preparePassScreen() {
    if (state.currentPlayerTurn >= state.players.length) {
        startVoting();
        return;
    }
    UI.passPlayerName.textContent = state.players[state.currentPlayerTurn];
    showScreen('pass');
}

UI.confirmPlayerBtn.addEventListener('click', () => {
    showWordScreen();
});

function showWordScreen() {
    const isImposter = (state.currentPlayerTurn === state.imposterIndex);
    UI.viewingPlayerName.textContent = state.players[state.currentPlayerTurn];
    
    // Limpeza de segurança para evitar vazamento da dica
    UI.hintText.textContent = '';
    UI.hintText.classList.add('hidden');

    if (isImposter) {
        if (state.mode === 1) {
            UI.secretWord.textContent = "VOCÊ É O IMPOSTOR";
            UI.hintText.textContent = `Dica: ${state.currentWordObj.hint}`;
            UI.hintText.classList.remove('hidden');
        } else {
            // Modo 2: O impostor não sabe que é o impostor, recebe a similar
            UI.secretWord.textContent = state.currentWordObj.similar;
        }
    } else {
        // Jogadores normais recebem a palavra original
        UI.secretWord.textContent = state.currentWordObj.word;
    }
    
    showScreen('word');
}

UI.hideWordBtn.addEventListener('click', () => {
    UI.secretWord.textContent = "???"; // Esconde para evitar leitura acidental na transição
    state.currentPlayerTurn++;
    preparePassScreen();
});

// === TELA 4: VOTAÇÃO ===
function startVoting() {
    UI.votingList.innerHTML = '';
    state.votes = {}; 
    
    state.players.forEach(player => {
        const btn = document.createElement('button');
        btn.className = 'vote-btn';
        btn.textContent = `Votar em ${player}`;
        btn.onclick = () => processVote(player);
        UI.votingList.appendChild(btn);
    });
    
    showScreen('voting');
}

function processVote(votedPlayer) {
    const impostorReal = state.players[state.imposterIndex];
    const jogadoresVenceram = (votedPlayer === impostorReal);
    
    showResultScreen(jogadoresVenceram, impostorReal);
}

// === TELA 5: RESULTADOS ===
function showResultScreen(jogadoresVenceram, impostorReal) {
    const title = document.getElementById('result-title');
    
    if (jogadoresVenceram) {
        title.textContent = "Os Jogadores Venceram!";
        title.style.color = "#27ae60";
    } else {
        title.textContent = "O Impostor Venceu!";
        title.style.color = "#e74c3c";
    }
    
    document.querySelector('#result-imposter span').textContent = impostorReal;
    document.querySelector('#result-word span').textContent = state.currentWordObj.word;
    
    showScreen('result');
}

UI.restartBtn.addEventListener('click', () => {
    showScreen('setup');
});