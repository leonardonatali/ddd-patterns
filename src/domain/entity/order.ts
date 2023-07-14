import OrderItem from "./order_item"

export default class Order {
  private id: string
  private customerId: string
  private items: OrderItem[] = []
  private total: number

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this.id = id
    this.customerId = customerId
    this.items = items
    this.total = items.reduce((total, item) => total + item.Total, 0)

    this.validate()
  }

  validate(): void {
    if (this.id.length === 0) {
      throw new Error("ID is required")
    }

    if (this.customerId.length === 0) {
      throw new Error("Customer ID is required")
    }

    if (this.items.length === 0) {
      throw new Error("At least one item is required")
    }
  }

  get Total(): number {
    return this.total
  }
}
