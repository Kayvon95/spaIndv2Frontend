import {User} from './user.model';
export class Comment {
  constructor(
    public _id: string,
    public content: string,
    public user: User,
    public created_at:  Date) {}
}
