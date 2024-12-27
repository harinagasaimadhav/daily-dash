import { users } from "../Da/MongoConnect.ts";
import { Collection } from "npm:mongodb@6.1.0";
import { User } from "../dataObjects/User.ts";

export class UserService {
  private userCollection: Collection<User>;

  constructor() {
    this.userCollection = users;
  }

  public async createUser(user: User): Promise<string> {
    const insertResult = await this.userCollection.insertOne(user);
    return insertResult.insertedId.toString();
  }
}
