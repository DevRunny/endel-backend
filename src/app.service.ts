import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  @Inject(ConfigService)
  public config: ConfigService;

  public getHello(): any {
    const databaseName: string = this.config.get('POSTGRES_DB');

    console.log({ databaseName });

    return 'Hello World!';
  }
}
