import Order from "./order"
import OrderItem from "./order_item"

describe("order unit tests", () => {
  it("should trhow error if id is empty", () => {
    expect(()=>{
      new Order("", "", [])
    }).toThrowError("ID is required")
  })

  it("should trhow error if customer id is empty", () => {
    expect(()=>{
      new Order("test-id", "", [])
    }).toThrowError("Customer ID is required")
  })

  it("should trhow error if items is empty", () => {
    expect(()=>{
      new Order("test-id", "test-customer-id", [])
    }).toThrowError("At least one item is required")
  })

  it("should return correct order total", () => {
    const item1 = new OrderItem("test-id", "test-product-id", "test-name", 1, 5)
    const item2 = new OrderItem("test-id2", "test-product-id", "test-name2", 2, 2)

    const order = new Order("test-id", "test-customer-id", [item1])
    expect(order.Total).toEqual(5)

    const order2 = new Order("test-id", "test-customer-id", [item1, item2])
    expect(order2.Total).toEqual(9)
  })
})
