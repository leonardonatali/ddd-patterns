import Product from "../entity/product"

export default class ProductService {
  constructor() {
    return
  }

  increasePrice(products: Product[], percentage: number): void {
    if (percentage <= 0 || percentage > 100){
      throw new Error("the percentage must be between 0 and 100")
    }

    products.forEach((product: Product) => {
      product.Price += product.Price*(percentage/100)
    })
  }
}


