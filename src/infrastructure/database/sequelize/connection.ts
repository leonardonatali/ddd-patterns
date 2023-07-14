import {Sequelize} from "sequelize-typescript"

export function NewTestConnection(): Sequelize {
  return new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
    sync: {force: true}
  })
}
