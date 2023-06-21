import Address from "./address"

export default class Customer {
	_id: string
	_name: string
	_active: boolean
	_address!: Address

	constructor (id: string, name: string) {
		this._id = id
		this._name = name
		this._active = true 
		
		this.validate()
	}

	validate (): void {
		if (this._name.length === 0) {
			throw new Error("Name is required")
		}
	}

	set Address (address: Address) {
		this._address = address
	}

	Activate (): void {
		this._active = true
	}

	Deactivate (): void {
		this._active = false
	}
}
