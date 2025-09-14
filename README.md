# 📋 Projeto: Gerenciador de Jogadoras

Este projeto é uma aplicação simples em **JavaScript**, **HTML** e **CSS** para gerenciar jogadoras de futebol.  
Ele permite cadastrar, editar, excluir, favoritar, pesquisar e filtrar jogadoras por clube.

---

## 🚀 Funcionalidades

- **Listagem das jogadoras** em cards com foto, nome, posição, clube, estatísticas (gols, assistências e jogos).
- **Adicionar jogadora** via formulário.
- **Editar jogadora** (nome, posição, clube, foto e estatísticas).
- **Excluir jogadora** com confirmação.
- **Favoritar jogadora** (❤️ ou 🤍).
- **Pesquisar** por nome ou posição.
- **Filtrar** por clube.
- **Ordenar** por um campo (ex: nome, posição, clube).
- **Persistência temporária** no `localStorage`.

---

## 📂 Estrutura de Dados

As jogadoras são armazenadas em um array de objetos:

```javascript
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
  }
  // ...
];
```

---

## 📂 Estrutura de Dados da Jogadora

Cada jogadora possui os seguintes campos:

- **nome** → Nome da jogadora  
- **posicao** → Posição em campo  
- **clube** → Clube atual  
- **foto** → Caminho da foto  
- **gols** → Número de gols  
- **assistencias** → Número de assistências  
- **jogos** → Número de jogos disputados  
- **favorita** → Booleano para marcar se é favorita  

---

## 📌 Principais Funções

- 🔹 **displayPlayers()**  
  Renderiza todas as jogadoras na tela aplicando busca e filtro de clube.  

- 🔹 **toggleFavorite(index)**  
  Alterna o estado de favorita da jogadora.  

- 🔹 **deletePlayer(index)**  
  Remove a jogadora do array (com confirmação).  

- 🔹 **addPlayer(event)**  
  Adiciona uma nova jogadora via formulário.  

- 🔹 **editPlayer(index)**  
  Edita os dados de uma jogadora com prompts.  

- 🔹 **populateClubFilter()**  
  Gera as opções únicas de clube para o filtro.  

- 🔹 **sortPlayers(campo)**  
  Ordena as jogadoras pelo campo escolhido (ordem alfabética para strings).  

---

## 🛠️ Tecnologias Utilizadas

- **HTML5** → Estrutura da página  
- **CSS3** → Estilização dos cards e botões  
- **JavaScript (ES6)** → Lógica de interação  
- **LocalStorage** → Armazenamento simples no navegador

---

## 👩‍💻 Autor

Projeto desenvolvido por Ana Luiza ✨
Estudante de Engenharia de Software apaixonada por tecnologia e esportes.
