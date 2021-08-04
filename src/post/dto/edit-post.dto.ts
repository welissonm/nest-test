import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { User } from 'src/user/entities/user.entity';

export class EditPostDto {
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  id: string;
  @ApiProperty({ type: 'string' })
  @IsNotEmpty()
  @IsString()
  text: string;
  user?: User;
}
