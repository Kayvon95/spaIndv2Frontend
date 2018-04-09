import {Post} from './post.model';
export class User {
  constructor(
    public _id: string,
    public userName: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public posts: Post[]
  ) {}
}
