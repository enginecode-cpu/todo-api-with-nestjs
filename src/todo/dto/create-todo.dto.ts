import { IsNumber, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNumber()
  readonly id: number;

  @IsString()
  readonly title: string;

  @IsString()
  readonly content: string;
}
