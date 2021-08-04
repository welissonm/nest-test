import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreatePostDto } from './dto/create-post.dto';
import { EditPostDto } from './dto/edit-post.dto';
import { Post as PostEntity } from './entities/post.entity';
import { PostService } from './post.service';

@Controller('post')
@ApiTags('Post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  listAll(): Promise<PostEntity[]> {
    return this.postService.findAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.postService.findById(id);
  }

  @Get('/user/:id')
  getByUser(@Param('id') id: string) {
    return this.postService.findByUser(id);
  }

  @Post()
  create(@Body() dto: CreatePostDto) {
    return this.postService.create(dto);
  }

  @Patch()
  edit(@Body() dto: EditPostDto) {
    return this.postService.edit(dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.delete(id);
  }
}
