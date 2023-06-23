export default class Product {
	private id: string
	private name: string
	private price: number

	constructor(id: string, name: string, price: number) {
		this.id = id
		this.name = name
		this.price = price

		this.validate()
	}

	validate(){
		if (this.id.trim().length === 0) {
			throw new Error("id is required")
		}

		if (this.name.trim().length === 0) {
			throw new Error("name is required")
		}

		if (this.price <= 0) {
			throw new Error("price must be greater than 0")
		}
	}

	get Id(): string {
		return this.id
	}

	get Name(): string {
		return this.name
	}

	set Name(name: string) {
		this.name = name
		this.validate()
	}
    
	get Price(): number {
		return this.price
	}

	set Price(price: number) {
		this.price = price
	}
}
