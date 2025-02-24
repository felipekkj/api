var descrição;
const selcElement = document.getElementById("personagem");

selcElement.addEventListener("click", function () {
  var personagem = selcElement.value;
  exibirPokemon(personagem)
  
  async function exibirPokemon(nomePokemon) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`
      );
      if (!response.ok) {
        throw new Error("Pokémon não encontrado ou erro de API");
      }
      const data = await response.json();

      const nome = data.name;
      const imagem = data.sprites.front_default;

      const habilidades = data.abilities.map((ability) => ability.ability.name);
      const pokemonDiv = document.getElementById("pokemon");
      pokemonDiv.innerHTML = `<h2>${nome}</h2><img src="${imagem}" width="300px" height="300px" alt=${nome}"><br><p>${habilidades}</p> `;
    } catch (erros) {
      console.error("Erro: " + erros);
      const pokemonDiv = document.getElementById("pokemon");
      pokemonDiv.innerHTML = `<p style="color: red;">${erros.message}</p>`;
    }
  }
});
