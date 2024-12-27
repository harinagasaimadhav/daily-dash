import { users } from "../Da/MongoConnect.ts";
import { WithId } from "npm:mongodb@6.1.0";
import { User } from "../dataObjects/User.ts";

async function addUser(user: User): Promise<string> {
  const insertResult = await users.insertOne(user);
  return insertResult.insertedId.toString();
}

async function findUser(
  filter: { [K: string]: string | number },
): Promise<WithId<User> | null> {
  return await users.findOne(filter);
}

export { addUser, findUser };
