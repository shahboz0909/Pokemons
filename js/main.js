// listni chaqirish
let elPokemonList = $(".js-pokemoni-list");

let elPokemonFunc = function(pokemon) {
  let elPokemonItem = createElement("li", "pokemons-item w-25 card m-3");

  let elPokemonsImg = createElement("img", "card-img-top mx-auto");
  elPokemonsImg.src = pokemon.img;
  
  let elPokemonsInner = createElement("div","card-body");
  
  let elNewHeading = createElement("h3", "card-title h5 text-center", pokemon.name);
  let elNewText = createElement("p", "card-text text-center", pokemon.type.join(", "));
  
  
  elPokemonsInner.append(elNewHeading, elNewText);
  elPokemonItem.append(elPokemonsImg, elPokemonsInner);
  elPokemonList.appendChild(elPokemonItem);
}

pokemons.forEach(function(pokemon){
  elPokemonFunc(pokemon);
})

