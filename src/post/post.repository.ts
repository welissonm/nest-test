import { EntityRepository, Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  findAll(): Promise<Post[]> {
    return this.find({
      where: {
        isActive: true,
      },
    });
  }
  async findById(id: string) {
    return this.findOne({
      where: {
        id,
        isActive: true,
      },
    });
  }
  async findByUser(userId: string): Promise<[Post[], number]> {
    return this.findAndCount({
      where: {
        user: {
          id: userId,
          isActive: true,
        },
        isActive: true,
      },
    });
  }
}
