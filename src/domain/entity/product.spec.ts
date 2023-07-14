import Product from "./product"

describe("products unit tests", () => {
  it("should create product", () => {
    const product = new Product("test_id", "test_name", 1.23)
    expect(product.Id).toBe("test_id")
    expect(product.Name).toBe("test_name")
    expect(product.Price).toBe(1.23)
  })

  it("should throw error if id is not provided", () => {
    expect(() => {
      return new Product("", "", 0)
    }).toThrowError("id is required")
  })

  it("should throw error if name is not provided", () => {
    expect(() => {
      return new Product("test_id", "", 0)
    }).toThrowError("name is required")
  })

  it("should throw error if price is zero", () => {
    expect(() => {
      return new Product("test_id", "test_name", 0)
    }).toThrowError("price must be greater than 0")
  })

  it("should throw error if price is less than zero", () => {
    expect(() => {
      return new Product("test_id", "test_name", -1.23)
    }).toThrowError("price must be greater than 0")
  })

  it("should change product name", () => {
    const product = new Product("test_id", "test_name", 1.23)
    expect(product.Name).toEqual("test_name")

    product.Name = "test_name2"
    expect(product.Name).toEqual("test_name2")
  })

  it("should change product price", () => {
    const product = new Product("test_id", "test_name", 1.23)
    expect(product.Price).toEqual(1.23)

    product.Price = 1.24
    expect(product.Price).toEqual(1.24)
  })
})
