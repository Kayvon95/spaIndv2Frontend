import {User} from './user.model';
export class Post {
  constructor(
    public _id: string,
    public title: string,
    public content: string,
    public tag: string,
    public comments: Comment[],
    public user: User,
    public created_at:  Date) {}
}
