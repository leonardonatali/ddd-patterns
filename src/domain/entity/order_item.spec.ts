import OrderItem from "./order_item"

describe("order items unit tests", () => {
  it("should create order item", () => {
    const item = new OrderItem("test-id", "test-product-id", "test-name", 1.23, 1)
    expect(item.Id).toBe("test-id")
    expect(item.ProductId).toBe("test-product-id")
    expect(item.Name).toBe("test-name")
    expect(item.Price).toBe(1.23)
  })

  it("should throw error if id is not provided", () => {
    expect(() => {
      return new OrderItem("", "", "", 0, 0)
    }).toThrowError("id is required")
  })

  it("should throw error if product id is not provided", () => {
    expect(() => {
      return new OrderItem("test-id", "", "", 0, 0)
    }).toThrowError("product id is required")
  })

  it("should throw error if name is not provided", () => {
    expect(() => {
      return new OrderItem("test-id", "test-product-id", "", 0, 0)
    }).toThrowError("name is required")
  })

  it("should throw error if price is zero", () => {
    expect(() => {
      return new OrderItem("test-id", "test-product-id", "test-name", 0, 0)
    }).toThrowError("price must be greater than 0")
  })

  it("should throw error if price is less than zero", () => {
    expect(() => {
      return new OrderItem("test-id", "test-product-id", "test-name", -1.23, 0)
    }).toThrowError("price must be greater than 0")
  })

  it("should throw error if quantity is zero", () => {
    expect(() => {
      return new OrderItem("test-id", "test-product-id", "test-name", 1, 0)
    }).toThrowError("quantity must be greater than 0")
  })

  it("should throw error if quantity is less than zero", () => {
    expect(() => {
      return new OrderItem("test-id", "test-product-id", "test-name", 1.23, -1)
    }).toThrowError("quantity must be greater than 0")
  })

  it("should calculate total price", () => {
    const item = new OrderItem("test-id", "test-product-id", "test-name", 1.23, 5)
    expect(item.Total).toEqual(6.15)
  })
})
