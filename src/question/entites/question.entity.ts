import { Column, Entity, JoinTable, ManyToMany } from 'typeorm';
import { Category } from 'src/category/entities/category.entity';
import { BaseEntity } from 'src/common/entity/base-entity.entity';

@Entity({ name: 'questions' })
export class Question extends BaseEntity {
  @Column()
  title: string;

  @Column()
  text: string;

  @ManyToMany(() => Category)
  @JoinTable()
  categories: Category[];
}
