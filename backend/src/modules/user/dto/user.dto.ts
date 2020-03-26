import { IsNotEmpty,IsEmail } from 'class-validator';
import { RoleType } from 'src/modules/roles/roletype.enum';
import { UserDetail } from '../user_details.entity';

export class UserDto{
    @IsNotEmpty()
    id: number;
    
    @IsNotEmpty()
    username:string;
    
    @IsNotEmpty()
    @IsEmail()
    email:string;
    
    @IsNotEmpty()
    roles:RoleType[]
    
    @IsNotEmpty()
    details:UserDetail
}