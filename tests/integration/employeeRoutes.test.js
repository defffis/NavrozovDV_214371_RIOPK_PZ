
const request = require('supertest');
const app = require('../../server/app');

describe('Маршруты сотрудников', () => {
  it('GET /api/employees - получить список сотрудников (без токена)', async () => {
    const res = await request(app).get('/api/employees');
    expect(res.statusCode).toBe(401);
  });
});
