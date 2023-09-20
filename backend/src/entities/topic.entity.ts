import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"; 

@Entity()
export class Topic {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: false, length : 250})
    description: string;

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

}