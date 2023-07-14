import {v5 as uuid} from "uuid"
import Customer from "../entity/customer"
import Order from "../entity/order"
import OrderItem from "../entity/order_item"

const rewardPointsFactor = 2
export default class OrderService {
  constructor() {return}

  total(orders: Order[]): number {
    return orders.reduce((total, order) => total + order.Total, 0)
  }

  placeOrder(customer: Customer, items: OrderItem[]): Order {
    if (items.length == 0) {
      throw new Error("items must have at least one item")
    }

    const order = new Order(uuid.toString(), customer.Id, items)
    customer.IncreaseRewardPoints(order.Total/rewardPointsFactor)

    return order
  }
}
