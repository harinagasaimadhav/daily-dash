import { close, users } from "../MongoConnect.ts";
import { User } from "../../dataObjects/User.ts";
import { Int32 } from "npm:bson@6.10.0";

const document: User = new User(9542533446, "Abc12345", "Hari");

const userInsertOneResult = await users.insertOne(document);
console.log("insert result: " + JSON.stringify(userInsertOneResult));

const userFindOneResult = await users.findOne({
  mobileNumber: new Int32(9542533446),
}, { sort: { _id: -1 } });
console.log("find result: " + JSON.stringify(userFindOneResult));

await close();
