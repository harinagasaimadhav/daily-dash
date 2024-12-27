import { Int32, ObjectId } from "npm:bson@6.10.0";

export class User {
  public _id?: ObjectId;
  public mobileNumber: Int32;
  public password: string;
  public username: string;

  constructor(mobileNumber: number, password: string, username: string) {
    this.mobileNumber = new Int32(mobileNumber);
    this.password = password;
    this.username = username;
  }
}
