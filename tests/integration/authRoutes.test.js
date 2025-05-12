
const request = require('supertest');
const app = require('../../server/app');

describe('Маршруты аутентификации', () => {
  it('POST /api/auth/register - регистрация пользователя', async () => {
    const res = await request(app).post('/api/auth/register').send({
      role: 'client',
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123',
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('token');
  });

  it('POST /api/auth/login - вход пользователя', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: 'test@example.com',
      password: 'password123',
    });

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
