import Address from "./address"

export default class Customer {
	private id: string
	private name: string
	private active: boolean
	private address?: Address

	constructor (id: string, name: string) {
		this.id = id
		this.name = name
		this.active = true 
		
		this.validate()
	}

	validate (): void {
		if (this.id.length === 0) {
			throw new Error("ID is required")
		}
		if (this.name.length === 0) {
			throw new Error("Name is required")
		}
	}

	ChangeName (name: string) {
		this.name = name
		this.validate()
	}

	get Name (): string { 
		return this.name
	}

	set Address (address: Address) {
		this.address = address
	}

	get IsActive (): boolean {
		return this.active
	}

	Activate (): void {
		if (!this.address) {
			throw new Error("Client must have an address to be activated")		
		}

		this.active = true
	}

	Deactivate (): void {
		this.active = false
	}
}
