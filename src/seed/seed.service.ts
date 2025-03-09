import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    private readonly pokemonService: PokemonService,
    private readonly http: AxiosAdapter,
  ) {}

  async executeSeed() {
    await this.pokemonService.removeAll();

    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=150',
    );

    const pokemonsToInsert = data.results.map(({ name, url }) => {
      const segments = url.split('/');

      const no = +segments[segments.length - 2];

      return { name, no };
    });

    await this.pokemonService.createMany({ pokemons: pokemonsToInsert });

    return 'Seed executed successfully';
  }
}
