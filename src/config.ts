import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: process.env.DATABASE_URL,
  };
});
