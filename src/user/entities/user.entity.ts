import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from 'src/common/entity/base-entity.entity';
import { Profile } from 'src/profile/entities/profile.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @Column()
  name: string;
  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  profile: Profile;
}
