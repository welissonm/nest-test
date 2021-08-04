import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from 'src/common/entity/base-entity.entity';
import { User } from 'src/user/entities/user.entity';

@Entity({ name: 'posts' })
export class Post extends BaseEntity {
  @Column()
  title: string;
  @Column({ type: 'text' })
  text: string;
  @ManyToOne(() => User)
  user: User;
}
