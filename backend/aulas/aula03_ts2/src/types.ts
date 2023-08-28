export enum USER_ROLES {
  ADMIN = "admin",
  NORMAL = "normal"  
}


type Person = 
{
  id: string|number,
  name: string,
  email: string,
  passowrd: string,
}

type AdminAccount = {
  account: string,
  permission: USER_ROLES.ADMIN
}

type NormalAccount = {
  account: string,
  permission: USER_ROLES.NORMAL
}

export type UserAdmin = Person & AdminAccount
export type UserNormal = Person & NormalAccount
