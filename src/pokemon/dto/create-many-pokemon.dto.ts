import { ArrayNotEmpty, IsArray, ValidateNested } from 'class-validator';
import { CreatePokemonDto } from './create-pokemon.dto';
import { Type } from 'class-transformer';

export class CreateManyPokemonDto {
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => CreatePokemonDto)
  pokemons: CreatePokemonDto[];
}
