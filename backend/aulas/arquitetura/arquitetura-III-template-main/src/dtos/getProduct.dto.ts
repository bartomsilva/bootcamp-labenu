export interface GetProductInputDTO {
  q?: string
}

export interface GetProductOutputDTO {
  id: string
  name: string
  price: number
  createdAt: string
}

