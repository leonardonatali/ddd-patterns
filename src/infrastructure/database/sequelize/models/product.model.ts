import {Column, Model, PrimaryKey, Table} from "sequelize-typescript"

@Table({tableName: "products", timestamps: false})
export default class ProductModel extends Model {
	@PrimaryKey
	@Column({type: "string"})
  declare id: string

	@Column({allowNull: false, type: "string"})
	declare name: string

	@Column({allowNull: false, type: "decimal(15,2)"})
	declare price: number
}
