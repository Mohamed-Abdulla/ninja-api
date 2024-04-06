import { IsEnum, MinLength } from 'class-validator';

export class createNinjaDto {
  @MinLength(3)
  name: string;
  @IsEnum(['Genin', 'Chunin'], { message: 'Rank must be Genin or Chunin' })
  rank: number;
  available: boolean;
  age: number;
  description: string;
}
