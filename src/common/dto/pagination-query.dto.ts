import { IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional() // 可选
  @IsPositive() // 大于0整数
  readonly limit: number;

  @IsOptional()
  @IsPositive()
  readonly offset: number;
}
