import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    database: process.env.DATABASE_URL,
    jwtSecret: process.env.JWT_SECRET,
    apiKey: process.env.API_KEY,
  };
});

export interface AuthConfig {
  header: string;
}
export interface Config {
  auth: AuthConfig;
}

export const config: Config = {
  auth: {
    header: 'super-secret',
  },
};
