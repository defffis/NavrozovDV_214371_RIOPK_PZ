
const request = require('supertest');
const app = require('../../server/app');

describe('Маршруты поставщиков', () => {
  it('GET /api/suppliers - получить список поставщиков (без токена)', async () => {
    const res = await request(app).get('/api/suppliers');
    expect(res.statusCode).toBe(401); // Ожидается токен
  });
});
