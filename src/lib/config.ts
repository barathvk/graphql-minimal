import { Type } from 'class-transformer'
import { IsDefined, IsNumber, Max, Min, ValidateNested } from 'class-validator'
import { LoggerOptions } from 'bunyan'
class Server {
  @IsNumber()
  @Max(65536)
  @Min(1024)
  port: number
}
export class Config {
  @IsDefined()
  logger: LoggerOptions

  @IsDefined()
  @ValidateNested()
  @Type(() => Server)
  server: Server
}
