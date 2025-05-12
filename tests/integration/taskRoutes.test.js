
const request = require('supertest');
const app = require('../../server/app');

describe('Маршруты задач', () => {
  it('GET /api/tasks - получить список задач (без токена)', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.statusCode).toBe(401);
  });
});
