import { BaseEntity, PrimaryGeneratedColumn, Column, OneToMany, Entity, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entity';


@Entity('citas')
export class Cita extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id:number
    
    @Column({type:'varchar', length:100,nullable:false})
    tittle:string;
    
    @Column({type:'text', nullable:true})
    description:string

    @Column({type:'date',nullable:false})
    date:Date;

    @Column({type:'time',nullable:false})
    hora:Date;

    @Column({type:'time',nullable:false})
    hora_fin:Date;
    
    @ManyToOne(type=>User,user=>user.citas)
    @JoinColumn({name:'user_cita'})
    user:User;


    @Column({type:'timestamp', name:'create_at'})
    createAt:Date;
    
    @Column({type:'timestamp',name:'update_at'})
    updateAt:Date;

}