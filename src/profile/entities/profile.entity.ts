import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from 'src/common/entity/base-entity.entity';
import { User } from 'src/user/entities/user.entity';

@Entity({ name: 'profiles' })
export class Profile extends BaseEntity {
  @Column()
  firstName: string;
  @Column()
  lastName: string;
  @Column()
  gender: string;
  @Column()
  photo: string;
  @OneToOne(() => User, (user) => user.profile)
  user: User;
}
