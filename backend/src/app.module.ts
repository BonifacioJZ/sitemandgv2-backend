import { Configuration } from './config/configkeys';
import { ConfigService } from './config/config.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { RolesModule } from './modules/roles/roles.module';
import { CitaModule } from './modules/cita/cita.module';
import { ListaModule } from './modules/lista/lista.module';

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule, RolesModule, CitaModule, ListaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;

  constructor(private readonly _configService:ConfigService){
    // Asignar puerto de Desarrollo
    AppModule.port = this._configService.get(Configuration.PORT);

  }
}
