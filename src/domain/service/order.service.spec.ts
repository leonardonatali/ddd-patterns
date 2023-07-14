import Customer from "../entity/customer"
import Order from "../entity/order"
import OrderItem from "../entity/order_item"
import OrderService from "./order.service"

describe("order servic unit tests", () => {
  it("should calculate orders total", () => {
    const item1 = new OrderItem("1", "1", "item1", 100, 1)
    const item2 = new OrderItem("2", "2", "item2", 200, 2)
    const order1 = new Order("1", "1", [item1, item2])

    const item3 = new OrderItem("3", "3", "item3", 300, 3)
    const item4 = new OrderItem("4", "4", "item4", 400, 4)
    const order2 = new Order("2", "2", [item3, item4])

    const service = new OrderService()
    expect(service.total([order1, order2])).toBe(3000)
  })

  it("should place an order", () => {
    const customer = new Customer("1", "test customer")

    const item1 = new OrderItem("1", "1", "item1", 100, 1)
    const item2 = new OrderItem("2", "2", "item2", 200, 2)

    const service = new OrderService()
    const order = service.placeOrder(customer, [item1, item2])


    expect(order.Total).toEqual(500)
    expect(customer.RewardPoints).toEqual(250)
  })

  it("should throw error if place an order with no items", () => {
    const customer = new Customer("1", "test customer")
    const service = new OrderService()

    expect(() => service.placeOrder(customer, [])).toThrowError("items must have at least one item")

    expect(customer.RewardPoints).toEqual(0)
  })
})
