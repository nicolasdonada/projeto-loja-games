import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: "tb_produto"})
export class Produto {

    @PrimaryGeneratedColumn()
    id_produto: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nm_produto: string

    @IsNotEmpty()
    @IsNumber()
    @Column({type:'decimal',precision:10, scale:2})
    vl_produto: number
}