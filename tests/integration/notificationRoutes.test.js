
const request = require('supertest');
const app = require('../../server/app');

describe('Маршруты уведомлений', () => {
  it('GET /api/notifications - получить уведомления пользователя (без токена)', async () => {
    const res = await request(app).get('/api/notifications');
    expect(res.statusCode).toBe(401);
  });
});
