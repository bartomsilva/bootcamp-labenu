export interface DeleteProductInputDTO {
  idToDelete: string
}

export interface DeleteProductOutputDTO {
  message: string
  product: {
    id: string
    name: string
    price: number
    createdAt: string
  }
}