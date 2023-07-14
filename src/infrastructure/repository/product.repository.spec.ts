import {Sequelize} from "sequelize-typescript"
import {NewTestConnection} from "../database/sequelize/connection"
import ProductModel from "../database/sequelize/models/product.model"

describe("product repository test", () => {
  let sequelize: Sequelize

  beforeEach(async() => {
    sequelize = NewTestConnection()
    sequelize.addModels([ProductModel])
    return await sequelize.sync()
  })

  afterEach(async() => {
    return await sequelize.close()
  })

  it("test", () => { expect(1).toBe(1) })
})
