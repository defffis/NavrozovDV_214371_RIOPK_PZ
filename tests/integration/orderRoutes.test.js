
const request = require('supertest');
const app = require('../../server/app');

describe('Маршруты заказов', () => {
  it('GET /api/orders - получить список заказов (без токена)', async () => {
    const res = await request(app).get('/api/orders');
    expect(res.statusCode).toBe(401);
  });
});
