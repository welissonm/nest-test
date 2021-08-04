import { BaseEntity } from 'src/common/entity/base-entity.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'categories' })
export class Category extends BaseEntity {
  @Column()
  name: string;
  @Column({ type: 'text' })
  description: string;
}
