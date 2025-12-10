import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({name: "tb_categoria"})
export class Categoria {

    @PrimaryGeneratedColumn()
    id_categoria: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nm_categoria: string

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    ds_categoria: string

    @OneToMany(() => Produto, (produto) => produto.categoria)
    produtos: Produto[]
}
