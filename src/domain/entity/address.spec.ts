import Address from "./address"

describe("addresses unit tests", () => {
  it("should successfully create a new address", () => {
    new Address("test-street", "test-number", "test-zip", "test-city")
  })

  it("should throw error if street is empty create a new address", () => {
    expect(()=>{
      new Address("", "test-number", "test-zip", "test-city")
    }).toThrowError("Street is required")
  })

  it("should throw error if number is empty create a new address", () => {
    expect(()=>{
      new Address("test-street", "", "test-zip", "test-city")
    }).toThrowError("Number is required")
  })

  it("should throw error if zip is empty create a new address", () => {
    expect(()=>{
      new Address("test-street", "test-number", "", "test-city")
    }).toThrowError("Zip is required")
  })

  it("should throw error if city is empty create a new address", () => {
    expect(()=>{
      new Address("test-street", "test-number", "test-zip", "")
    }).toThrowError("City is required")
  })
})
