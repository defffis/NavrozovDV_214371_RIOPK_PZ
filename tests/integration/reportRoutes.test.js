
const request = require('supertest');
const app = require('../../server/app');

describe('Маршруты отчётов', () => {
  it('POST /api/reports - создать отчёт (без токена)', async () => {
    const res = await request(app).post('/api/reports').send({
      title: 'Отчёт по продажам',
      content: 'Содержимое отчета',
      createdBy: 'admin'
    });
    expect(res.statusCode).toBe(401);
  });
});
