
const Product = require('../../server/models/Product');
const productService = require('../../server/services/productService');

jest.mock('../../server/models/Product');

describe('productService', () => {
  it('должен успешно создать товар', async () => {
    const mockProduct = { name: 'Тестовый товар', price: 100 };
    Product.create.mockResolvedValue(mockProduct);

    const result = await productService.createProduct(mockProduct);

    expect(result).toEqual(mockProduct);
    expect(Product.create).toHaveBeenCalledWith(mockProduct);
  });

  it('должен выбросить ошибку при сбое базы', async () => {
    Product.create.mockRejectedValue(new Error('Ошибка базы'));

    await expect(productService.createProduct({})).rejects.toThrow('Ошибка базы');
  });
});
