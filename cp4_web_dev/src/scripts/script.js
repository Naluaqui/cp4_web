let jogadoras = [
  {
    "nome": "Andressa Alves",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "src/assets/ft_andressa.png",
    "gols": 15,
    "assistencias": 10,
    "jogos": 28,
    "favorita": false
  },
  {
    "nome": "Dayana Rodríguez",
    "posicao": "Meio-campo",
    "clube": "Corinthians",
    "foto": "src/assets/ft_dayana.png",
    "gols": 5,
    "assistencias": 12,
    "jogos": 30,
    "favorita": false
  },
  {
    "nome": "Mariza",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "src/assets/ft_mariza.png",
    "gols": 2,
    "assistencias": 1,
    "jogos": 32,
    "favorita": false
  },
  {
    "nome": "Thaís Regina",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "src/assets/ft_thais.png",
    "gols": 1,
    "assistencias": 2,
    "jogos": 25,
    "favorita": false
  },
  {
    "nome": "Letícia Teles",
    "posicao": "Zagueira",
    "clube": "Corinthians",
    "foto": "src/assets/ft_leticia.png",
    "gols": 0,
    "assistencias": 0,
    "jogos": 18,
    "favorita": false
  }
];

localStorage.setItem('jogadoras', JSON.stringify(jogadoras));

window.onload = function() {
    displayPlayers();
    populateClubFilter();

    document.getElementById('playerForm').addEventListener('submit', addPlayer);
    document.getElementById('searchInput').addEventListener('input', displayPlayers);
    document.getElementById('filterClub').addEventListener('change', displayPlayers);

};

function displayPlayers() {
    const jogadorasList = document.getElementById('jogadorasList');
    jogadorasList.innerHTML = '';

    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const filterClub = document.getElementById('filterClub').value;

    jogadoras.forEach((player, index) => {
        if ((player.nome.toLowerCase().includes(searchTerm) || player.posicao.toLowerCase().includes(searchTerm)) &&
            (filterClub === "" || player.clube === filterClub)) {

            const jogadorasElement = document.createElement('div');
            jogadorasElement.classList.add('card-jogadoras');

            jogadorasElement.innerHTML = `
            <img src="${player.foto}" alt="${player.nome}" style="max-width:150px; border-radius:8px;">
            <h3>${player.nome}</h3>
            <p><strong>Posição:</strong> ${player.posicao}</p>
            <p><strong>Clube:</strong> ${player.clube}</p>
            <p><strong>Gols:</strong> ${player.gols} | <strong>Assistências:</strong> ${player.assistencias} | <strong>Jogos:</strong> ${player.jogos}</p>
            <div class="card-buttons">
            <button class="btn-fav" onclick="toggleFavorite(${index})">${player.favorita ? '❤️ Favorita' : '🤍 Favorita'}</button>
            <button class="btn-edit" onclick="editPlayer(${index})">✏️ Editar</button>
            <button class="btn-delete" onclick="deletePlayer(${index})">🗑️ Deletar</button>
            </div>
            <hr style="margin:20px 0;">
            `;


            jogadorasList.append(jogadorasElement);
        }
    });
}

function toggleFavorite(index) {
    jogadoras[index].favorita = !jogadoras[index].favorita;
    displayPlayers();
}

function deletePlayer(index) {
    if (confirm(`Deseja realmente deletar ${jogadoras[index].nome}?`)) {
        jogadoras.splice(index, 1);
        displayPlayers();
    }
}

function addPlayer(event) {
    event.preventDefault();

    const newPlayer = {
        nome: document.getElementById('playerName').value,
        posicao: document.getElementById('playerPosition').value,
        clube: document.getElementById('playerClub').value,
        foto: document.getElementById('playerPhoto').value || "https://via.placeholder.com/150",
        gols: parseInt(document.getElementById('playerGoals').value),
        assistencias: parseInt(document.getElementById('playerAssists').value),
        jogos: parseInt(document.getElementById('playerGames').value),
        favorita: false
    };

    jogadoras.unshift(newPlayer);
    document.getElementById('playerForm').reset();
    displayPlayers();
}

function editPlayer(index) {
    const player = jogadoras[index];
    if (!player) return;

    const novoNome = prompt("Editar nome:", player.nome);
    if (novoNome !== null) player.nome = novoNome;

    const novaPosicao = prompt("Editar posição:", player.posicao);
    if (novaPosicao !== null) player.posicao = novaPosicao;

    const novoClube = prompt("Editar clube:", player.clube);
    if (novoClube !== null) player.clube = novoClube;

    const novaFoto = prompt("Editar URL da foto:", player.foto);
    if (novaFoto !== null) player.foto = novaFoto;

    const novosGols = prompt("Editar número de gols:", player.gols);
    if (novosGols !== null && !isNaN(novosGols)) player.gols = parseInt(novosGols);

    const novasAssistencias = prompt("Editar número de assistências:", player.assistencias);
    if (novasAssistencias !== null && !isNaN(novasAssistencias)) player.assistencias = parseInt(novasAssistencias);

    const novosJogos = prompt("Editar número de jogos:", player.jogos);
    if (novosJogos !== null && !isNaN(novosJogos)) player.jogos = parseInt(novosJogos);

    displayPlayers();
}

function populateClubFilter() {
    const filterClub = document.getElementById('filterClub');
    filterClub.innerHTML = '<option value="">Todos os clubes</option>'; // limpa antes de popular
    const clubs = [...new Set(jogadoras.map(p => p.clube))];
    clubs.forEach(clube => {
        const option = document.createElement('option');
        option.value = clube;
        option.textContent = clube;
        filterClub.appendChild(option);
    });
}

function sortPlayers(campo) {
    jogadoras.sort((a, b) => a[campo].localeCompare(b[campo]));
    displayPlayers();
}
