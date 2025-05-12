
const request = require('supertest');
const app = require('../../server/app');

describe('Маршруты аналитики', () => {
  it('POST /api/analytics/generate/daily - генерировать отчёт (без токена)', async () => {
    const res = await request(app).post('/api/analytics/generate/daily');
    expect(res.statusCode).toBe(401); // Ожидается токен
  });
});
