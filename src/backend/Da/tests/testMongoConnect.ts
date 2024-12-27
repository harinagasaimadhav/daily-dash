import { close, User, users } from "../MongoConnect.ts";
import { Int32 } from "npm:bson@6.10.0";

const document: User = {
  "mobileNumber": new Int32(9542533446),
  "password": "Abc12345",
  "username": "Hari",
};

const userInsertOneResult = await users.insertOne(document);
console.log("insert result: " + JSON.stringify(userInsertOneResult));

const userFindOneResult = await users.findOne({
  mobileNumber: new Int32(9542533445),
});
console.log("find result: " + JSON.stringify(userFindOneResult));

await close();
