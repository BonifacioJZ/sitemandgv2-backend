import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn } from 'typeorm';
import { type } from 'os';
import { User } from '../user/user.entity';

@Entity('roles')
export class Role extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;
    
    @Column({type:'varchar', length:20,nullable:false})
    name:string;
    
    @Column({type:'text',nullable:false})
    description:string

    @ManyToMany(type=>User,user=> user.roles)
    @JoinColumn()
    users:User[];
    @Column({type:'timestamp', name:'create_at'})
    createAt:Date;
    
    @Column({type:'timestamp',name:'update_at'})
    updateAt:Date;
}