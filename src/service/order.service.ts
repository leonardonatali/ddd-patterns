import Order from "../entity/order"

export default class OrderService {
	constructor() {return}

	total(orders: Order[]): number {
		return orders.reduce((total, order) => total + order.Total, 0)
	}
}
