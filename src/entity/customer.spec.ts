import Address from "./address"
import Customer from "./customer"

describe("customer unit tests", () => {
	it("should throw error if id is empty", () => {
		expect(() =>{
			new Customer("", "test")
		}).toThrowError("ID is required")
	})

	it("should throw error if name is empty", () => {
		expect(() =>{
			new Customer("test-id", "")
		}).toThrowError("Name is required")
	})

	it("should change name", ()=>{
		const customer = new Customer("test-id", "test-name")
		customer.ChangeName("john doe")
        
		expect(customer.Name).toEqual("john doe")
	})
    
	it("should throw error if new name is empty", () => {
		expect(() =>{
			const customer = new Customer("test-id", "test-name")
			customer.ChangeName("")
		}).toThrowError("Name is required")
	})

	it("should activate customer", () => {
		const customer = new Customer("test-id", "test-name")
		const address = new Address("test-street", "test-number", "test-zipcode", "test-city")
		customer.Address = address

		customer.Deactivate()
		customer.Activate()
		expect(customer.IsActive).toBe(true)
	})
	
	it("should throw error if address is empty when activate", () => {
		expect(() =>{
			const customer = new Customer("test-id", "test-name")
			
			customer.Activate()
		}).toThrowError("Client must have an address to be activated")
	})

	it("should deactivate customer", () => {
		const customer = new Customer("test-id", "test-name")
		
		customer.Deactivate()
		expect(customer.IsActive).toBe(false)
	})
})
