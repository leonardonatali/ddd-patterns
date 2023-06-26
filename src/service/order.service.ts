import Customer from "../entity/customer"
import Order from "../entity/order"

const rewardPointsFactor = 2
export default class OrderService {
	constructor() {return}

	total(orders: Order[]): number {
		return orders.reduce((total, order) => total + order.Total, 0)
	}

	placeOrder(customer: Customer, orders: Order[]) {
		const total = orders.reduce((total, order) => total + order.Total, 0)
		customer.IncreaseRewardPoints(total/rewardPointsFactor)
	}
}
