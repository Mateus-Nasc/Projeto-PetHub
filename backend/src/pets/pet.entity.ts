import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../usuarios/usuario.entity';

@Entity('pets')
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: ['Cachorro', 'Gato'],
  })
  especie: string;

  @Column({ type: 'varchar', length: 30 })
  raca: string;

  @Column({ type: 'varchar', length: 30 })
  cor: string;

  @Column({ type: 'int' })
  idade: number;

  @Column({
    type: 'enum',
    enum: ['Macho', 'Fêmea'],
  })
  sexo: string;

  @Column({ default: false })
  adotado: boolean;

  // O onDelete: 'CASCADE' apaga os pets se o usuário for deletado
  // garantindo assim a integridade referencial.
  // O nullable: false; garante que um pet sempre tenha um doador associado
  @ManyToOne(() => Usuario, (usuario) => usuario.pets, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  doador: Usuario;
}
