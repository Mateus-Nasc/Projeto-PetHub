import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('pets')
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  idade: string; // Ex: "2 meses" ou "3 anos"

  @Column()
  cor: string;

  @Column()
  raca: string;

  @Column()
  sexo: string;

  // O onDelete: 'CASCADE' apaga os pets se o usuário for deletado
  // garantindo assim a integridade referencial.
  // O nullable: false garante que um pet sempre tenha um doador associado
  @ManyToOne(() => Usuario, (usuario) => usuario.pets, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  doador: Usuario;
}
