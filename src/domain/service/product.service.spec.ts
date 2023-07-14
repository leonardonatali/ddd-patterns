import Product from "../entity/product"
import ProductService from "./product.service"

describe("products service unit tests", () => {
  it("should increase all products price", () => {
    const p1 = new Product("p1", "p1", 100)
    const p2 = new Product("p2", "p2", 200)

    const service = new ProductService()
    service.increasePrice([p1, p2], 50)

    expect(p1.Price).toBe(150)
    expect(p2.Price).toBe(300)
  })

  it("should throw error if percentage is invalid", () => {
    expect(()=>{
      const service = new ProductService()
      service.increasePrice([], -1)
    }).toThrowError("the percentage must be between 0 and 100")
  })
})
