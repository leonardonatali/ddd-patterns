import Product from "../../domain/entity/product"
import {ProductRepositoryInterface} from "../../domain/repository/product.repository"
import ProductModel from "../database/sequelize/models/product.model"

export default class ProductRepository implements ProductRepositoryInterface {
  update(entity: Product): Promise<void> {
    throw new Error("Method not implemented.")
  }

  async find(id: string): Promise<Product> {
    return ProductModel.findByPk(id)
      .then((product)=>{ return new Product(product.id, product.name, product.price) })
      .catch(()=>{ throw new Error("couldn't find product") })

  }

  async findAll(): Promise<Product[]> {
    const products = await ProductModel.findAll()
    return products.map(product => new Product(product.id, product.name, product.price))
  }

  async create(product: Product): Promise<void> {
    await ProductModel.create({
      id: product.Id,
      name: product.Name,
      price: product.Price,
    })
  }
}
