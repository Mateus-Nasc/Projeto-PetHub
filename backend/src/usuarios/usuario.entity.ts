import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Pet } from '../pets/pet.entity';

@Entity('usuarios')
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({ unique: true })
  email: string;

  @Column()
  senha: string; // Salvei apenas a "Criar senha", a confirmação é só no front

  // Um usuário pode cadastrar vários pets para doação relção 1:N
  @OneToMany(() => Pet, (pet) => pet.doador)
  pets: Pet[];
}
