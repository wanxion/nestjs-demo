import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ description: '用户名' })
  @IsString()
  readonly username: string;

  @ApiProperty({ description: '账号' })
  @IsString()
  readonly account: string;

  @ApiProperty({ description: '密码' })
  @IsString()
  readonly password: string;

  @ApiProperty({
    description: '邮箱',
    example: 'cincoccc@gmail.com',
  })
  @IsString()
  readonly email: string;

  @ApiProperty({
    description: '手机号码',
    example: '15012341234',
  })
  @IsNumber()
  readonly phone: number;

  @ApiProperty({ description: '头像' })
  @IsString()
  readonly avatar: string;

  @ApiProperty({ description: '团队' })
  @IsString({ each: true })
  readonly teams: string[];
}
