import { TypeOrmModuleOptions } from '@nestjs/typeorm';
export default (
  name: string,
  database: string,
  ...entities: string[]
): TypeOrmModuleOptions => ({
  name: name,
  database: database,
  // entities: ['**/**.entity{.ts,.js}'],
  entities: entities ?? ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  cli: {
    migrationsDir: 'database/migrations/',
  },
});
