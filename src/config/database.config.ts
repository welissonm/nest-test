import { registerAs } from '@nestjs/config';
import { ConnectionOptions } from 'typeorm';
import ormConnectionConfig from './orm.config';

export const databaseCommonConfig = () =>
  ({
    type: process.env.DATABASE_TYPE == 'mysql' ? 'mysql' : 'mariadb',
    host: process.env.DATABASE_HOST,
    port: +process.env.DATABASE_PORT ?? 3306,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_USER_PASSWORD,
    migrations: ['database/migrations/*.js', 'database/migrations/*.ts'],
  } as Partial<ConnectionOptions>);

export default registerAs('database', databaseCommonConfig);

export const ormConfig = () => [
  ormConnectionConfig(
    'TEST_1',
    'test1',
    '/user/entities/*.entity{.ts,.js}',
    '/profile/entities/*.entity{.ts,.js}',
    '/post/entities/*.entity{.ts,.js}',
  ),
  ormConnectionConfig(
    'TEST_2',
    'test2',
    '/category/entities/*.entity{.ts,.js}',
    '/question/entities/*.entity{.ts,.js}',
  ),
];
