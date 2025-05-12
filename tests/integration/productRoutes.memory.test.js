
const request = require('supertest');
const app = require('../../server/app');
const db = require('../setup/mongoMemory');

beforeAll(async () => await db.connect());
afterEach(async () => await db.clearDatabase());
afterAll(async () => await db.closeDatabase());

describe('Пример: /products с in-memory MongoDB', () => {
  it('POST /api/products - создать продукт', async () => {
    const res = await request(app).post('/api/products').send({
      name: 'TestProduct',
      sku: 'TP001',
      price: 100,
      cost: 60,
      supplier: '123456789012345678901234',
      stockQuantity: 10
    });
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('TestProduct');
  });
});
