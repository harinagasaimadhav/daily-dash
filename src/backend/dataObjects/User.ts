import { ObjectId } from "npm:bson@6.10.0";

export class User {
  public _id?: ObjectId;
  public mobileNumber: string;
  public password: string;
  public username: string;

  constructor(mobileNumber: number, password: string, username: string) {
    this.mobileNumber = String(mobileNumber);
    this.password = password;
    this.username = username;
  }
}
