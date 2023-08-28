export class Account {
    constructor(
      private id:string, 
      private ownerId:string,
      private balance:number = 0,
      private createdAt:string= new Date().toISOString() ){}  

      getId =()=>{
        return this.id
      }
      getOwnerId =()=>{
        return this.ownerId
      }
      getBalance =()=>{
        return this.balance
      }
      getCreatedAt =()=>{
        return this.createdAt
      }
}

