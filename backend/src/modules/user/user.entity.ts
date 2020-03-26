import { Lista } from './../lista/lista.entity';
import { Cita } from './../cita/cita.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { UserDetail } from './user_details.entity';
import { Role } from '../roles/role.entity';
    
@Entity('users')
export class User extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column({type:'varchar', unique:true,length:25,nullable:false})
    username:string;
    
    @Column({type:"varchar",nullable:false})
    email:string;

    @Column({type:'varchar',nullable:false})
    password:string

    @OneToOne(type=> UserDetail,{cascade:true,nullable:false,eager:true})
    @JoinColumn({name:'detail_id'})
    details:UserDetail;
    
    @ManyToMany(type=>Role, role=>role.users)
    @JoinTable({name:'user_role'})
    roles : Role[]

    @OneToMany(type=> Cita,cita=>cita.user)
    citas:Cita[]

    @OneToMany(type=>Lista,lista=>lista.user)
    listas:Lista[]
    
    @Column({type:'varchar',default:'ACTIVE',length:8})
    status:string;

    @Column({type:'timestamp', name:'create_at'})
    createAt:Date;
    
    @Column({type:'timestamp',name:'update_at'})
    updateAt:Date;
}