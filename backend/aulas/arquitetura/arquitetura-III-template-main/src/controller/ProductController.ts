import { Request, Response } from "express"
import { ProductBusiness } from "../business/ProductBusiness"
import { EditProductSchema } from "../dtos/editProduct.dot"
import { handerError } from "../errors/handlerError"
import { CreateProductSchema } from "../dtos/createProduct.dto"
import { GetProductInputDTO } from "../dtos/getProduct.dto"

export class ProductController {

  constructor( private productBusiness: ProductBusiness ) {}

  public createProduct = async (req: Request, res: Response) => {
    try {

      const input = CreateProductSchema.parse({
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
      })

      const output = await this.productBusiness.createProduct(input)

      res.status(201).send(output)

    } catch (error) {
      handerError(res, error)
    }
  }

  public getProducts = async (req: Request, res: Response) => {
    try {

      const input: GetProductInputDTO = {
        q: req.query.q as string
      }

      const output = await this.productBusiness.getProducts(input)

      res.status(200).send(output)

    } catch (error) {
      handerError(res, error)
    }

  }

  public editProduct = async (req: Request, res: Response) => {
    try {

      const input = EditProductSchema.parse({
        idToEdit: req.params.id,
        id: req.body.id,
        name: req.body.name,
        price: req.body.price
      })

      const output = await this.productBusiness.editProduct(input)

      res.status(200).send(output)

    } catch (error) {
      handerError(res, error)
    }

  }

  public deleteProduct = async (req: Request, res: Response) => {
    try {

      const input = {
        idToDelete: req.params.id
      }

      const output = await this.productBusiness.deleteProduct(input)

      res.status(200).send(output)
    } catch (error) {
      handerError(res, error)
    }
  }
}