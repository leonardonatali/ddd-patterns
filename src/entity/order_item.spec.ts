import OrderItem from "./order_item"

describe("order items unit tests", () => {
	it("should create order item", () => {
		const item = new OrderItem("test_id", "test_name", 1.23)
		expect(item.Price).toBe(1.23)
		expect(item.Id).toBe("test_id")
		expect(item.Name).toBe("test_name")
	})

	it("should throw error if id is not provided", () => {
		expect(() => {
			return new OrderItem("", "", 0)
		}).toThrowError("id is required")
	})

	it("should throw error if name is not provided", () => {
		expect(() => {
			return new OrderItem("test_id", "", 0)
		}).toThrowError("name is required")
	})

	it("should throw error if price is zero", () => {
		expect(() => {
			return new OrderItem("test_id", "test_name", 0)
		}).toThrowError("price must be greater than 0")
	})

	it("should throw error if price is less than zero", () => {
		expect(() => {
			return new OrderItem("test_id", "test_name", -1.23)
		}).toThrowError("price must be greater than 0")
	})
})
