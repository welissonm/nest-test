import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { EditPostDto } from './dto/edit-post.dto';
import { Post } from './entities/post.entity';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepository: PostRepository) {}

  create(dto: CreatePostDto) {
    const instance = this.postRepository.create({
      ...dto,
    });
    this.save(instance);
  }
  save(post: Post) {
    return this.postRepository.save(post);
  }

  async edit(dto: EditPostDto) {
    const post = await this.findById(dto.id);
    if (!post) {
      throw new BadRequestException(`Post with id ${dto.id} not exist`);
    }
    post.text = dto.text;
    return this.save(post);
  }

  async delete(id: string) {
    const post = await this.findById(id);
    if (!post) {
      return;
    }
    post.isActive = false;
    await this.save(post);
  }

  findById(id: string): Promise<Post | undefined> {
    if (!id) {
      return undefined;
    }
    return this.postRepository.findById(id);
  }

  findAll(): Promise<Post[]> {
    return this.postRepository.findAll();
  }

  findByUser(userId: string) {
    this.postRepository.findByUser(userId);
  }
}
