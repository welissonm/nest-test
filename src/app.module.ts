import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { PostModule } from './post/post.module';
import { ProfileModule } from './profile/profile.module';
import { CategoryModule } from './category/category.module';
import { QuestionModule } from './question/question.module';
import { serverConfig, databaseConfig, databaseCommonConfig } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: false,
      envFilePath: ['.env.local'],
      isGlobal: true,
      load: [serverConfig, databaseConfig],
    }),
    TypeOrmModule.forRoot({
      database: 'test_1',
      ...databaseCommonConfig(),
      entities: [
        __dirname + '/user/entities/*.entity{.ts,.js}',
        __dirname + '/profile/entities/*.entity{.ts,.js}',
        __dirname + '/post/entities/*.entity{.ts,.js}',
      ],
    } as TypeOrmModuleOptions),
    TypeOrmModule.forRoot({
      database: 'test_2',
      ...databaseCommonConfig(),
      entities: [
        __dirname + '/category/entities/*.entity{.ts,.js}',
        __dirname + '/question/entities/*.entity{.ts,.js}',
      ],
    } as TypeOrmModuleOptions),
    UserModule,
    PostModule,
    ProfileModule,
    CategoryModule,
    QuestionModule,
  ],
  providers: [],
})
export class AppModule {}
