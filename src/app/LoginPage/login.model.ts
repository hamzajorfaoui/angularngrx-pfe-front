export interface Login{
    isLoggedIn:boolean,
    token?:String
}
export interface Userinfo{
    email:String,
    passwoard:String
}
export interface User{
    id:number,
    role_id:number,
    fullname:String, 
    email:String
}
