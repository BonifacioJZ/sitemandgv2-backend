import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";
    
@Entity('user_details')
export class UserDetail extends BaseEntity{
    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column({type:'varchar',length:50,nullable:false})
    name:string;
    
    @Column({type:'varchar',nullable:true})
    lastname:string;
   
    @Column({type:'timestamp', name:'create_at'})
    createAt:Date;
    
    @Column({type:'timestamp',name:'update_at'})
    updateAt:Date;
}