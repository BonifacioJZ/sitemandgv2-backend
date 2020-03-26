import { SharedModule } from './../../shared/shared.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';

@Module({
    imports:[TypeOrmModule.forFeature([UserRepository]),SharedModule],
    providers: [UserService],
    
})
export class UserModule {}
