export type PokemonData = {
  name: string;
  id: number;
  sprites: {
    front_shiny: string;
  };
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
};
