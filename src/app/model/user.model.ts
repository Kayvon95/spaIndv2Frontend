export class User {
  constructor(
    public _id: string,
    public _userName: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public created_at: Date) {}
}
