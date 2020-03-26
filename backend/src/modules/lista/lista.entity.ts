import { User } from './../user/user.entity';
import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';


@Entity('listas')
export class Lista extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column({type:'varchar',nullable:false})
    nombre:string

    @Column({type:'int',nullable:false})
    turno:number
    
    @ManyToOne(type=> User,user=>user.listas)
    @JoinColumn({name:"user_lista"})
    user:User

    @Column({type:'timestamp', name:'create_at'})
    createAt:Date;
    
    @Column({type:'timestamp',name:'update_at'})
    updateAt:Date;
}