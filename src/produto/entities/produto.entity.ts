import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

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

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos)
    categoria: Categoria
}