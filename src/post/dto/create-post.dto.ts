import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  text: string;
}
