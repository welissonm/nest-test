import { registerAs } from '@nestjs/config';

export interface ServerConfig {
  port: number;
}

export default registerAs(
  'server',
  () =>
    ({
      port: +process.env.SERVER_PORT ?? 3000,
    } as ServerConfig),
);
