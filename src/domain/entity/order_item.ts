export default class OrderItem {
  private id: string
  private productId: string
  private name: string
  private price: number
  private quantity: number

  constructor(id: string, productId: string, name: string, price: number, quantity: number) {
    this.id = id
    this.productId = productId
    this.name = name
    this.price = price
    this.quantity = quantity

    this.validate()
  }

  validate(): void {
    if (this.id.trim().length === 0) {
      throw new Error("id is required")
    }

    if (this.productId.trim().length === 0) {
      throw new Error("product id is required")
    }

    if (this.name.trim().length === 0) {
      throw new Error("name is required")
    }

    if (this.price <= 0) {
      throw new Error("price must be greater than 0")
    }

    if (this.quantity <= 0) {
      throw new Error("quantity must be greater than 0")
    }
  }

  get Id(): string {
    return this.id
  }

  get Name(): string {
    return this.name
  }

  get ProductId(): string {
    return this.productId
  }

  get Price(): number {
    return this.price
  }

  get Total(): number {
    return this.Price * this.Quantity
  }

  get Quantity(): number {
    return this.quantity
  }

}
