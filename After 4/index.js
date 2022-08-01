const getCharacters = async () => {
  // const response = await fetch("https://rickandmortyapi.com/api/character");
  // const data = await response.json();
  // console.log(data.results);
  const container = document.getElementById("container");
  const response = await axios("https://rickandmortyapi.com/api/character");
  const characters = response.data.results.map(character => {
    return {
      ...character,
      name: character.name.toLowerCase()
    }
  });

  const filtro = prompt("Ingrese el nombre a filtrar").toLowerCase();

  const filtrados = characters.filter(character => character.name.includes(filtro));

  filtrados.forEach(character => {
    let item = document.createElement("div");
    item.innerHTML = `
      <h2>nombre: ${character.name}</h2>
      <p>estado: ${character.status}</p>
      <p>especies: ${character.species} </p>
      <img src="${character.image}">
      <hr/>
    `;

    container.append(item);
  });
}

getCharacters();