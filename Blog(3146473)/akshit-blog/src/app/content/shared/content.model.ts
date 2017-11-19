export interface IBlog{
  id:number,
  title:string,
  authorName:string,
  date:string,
  logo:string,
  post:string,
  category:string,
  userRatings:IUserRatings[]
}

export interface IUserRatings{

  id:number,
  userName:string,
  rating:number
}
