import Address from "./entity/address"
import Customer from "./entity/customer"
import Order from "./entity/order"
import OrderItem from "./entity/order_item"

const customer = new Customer("customer_id", "test customer")
const address = new Address("test street", "123abc", "29730000", "test city")

customer.Address = address
customer.Activate()

const item1 = new OrderItem("order_item_1_id", "test-item1", 123.45)
const item2 = new OrderItem("order_item_2_id", "test-item2", 123.45)

const order = new Order("order_id", "customer_id", [item1, item2])

console.log(order)
