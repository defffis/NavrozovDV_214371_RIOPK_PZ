
const request = require('supertest');
const app = require('../../server/app');

describe('Маршруты клиентов', () => {
  it('GET /api/clients - получить список клиентов (без токена)', async () => {
    const res = await request(app).get('/api/clients');
    expect(res.statusCode).toBe(401);
  });
});
