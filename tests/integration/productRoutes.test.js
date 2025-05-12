
const request = require('supertest');
const app = require('../../server/app');
const mongoose = require('mongoose');

describe('Тестирование маршрутов /products', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost:27017/testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  });

  afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  });

  it('POST /api/products - создание продукта', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({
        name: 'Продукт1',
        sku: 'P001',
        price: 100,
        cost: 70,
        supplier: '123456789012',
        stockQuantity: 20,
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('Продукт1');
  });

  it('POST /api/products - ошибка без обязательных полей', async () => {
    const res = await request(app).post('/api/products').send({});
    expect(res.statusCode).toBe(400);
  });
});
