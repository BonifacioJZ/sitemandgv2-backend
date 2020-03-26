import { Configuration } from './../config/configkeys';
import { ConfigService } from './../config/config.service';
import { ConfigModule } from './../config/config.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';
export const databaseProvider=[
    TypeOrmModule.forRootAsync({
        imports:[ConfigModule],
        inject:[ConfigService],
        async useFactory(config:ConfigService){
            return {
                ssl:false,
                type: 'postgres' as 'postgres',
                host: config.get(Configuration.HOST),
                username: config.get(Configuration.USERNAME),
                password:config.get(Configuration.PASSWORD),
                database:config.get(Configuration.DATABASE),
                entities:[__dirname+'/../**/*.entity{.ts,.js}'],
                migrations:[__dirname+'/migrations/*{.ts,.js}']
            } as ConnectionOptions
        }
    })
]