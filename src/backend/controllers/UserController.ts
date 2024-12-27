import { Context } from "jsr:@oak/oak";
import { User } from "../dataObjects/User.ts";
import { UserService } from "../services/UserService.ts";

const userService = new UserService();

export class UserController {
  constructor() {}

  async createUser(context: Context) {
    const userInput = await context.request.body.json();

    if (!userInput?.mobileNumber) {
      context.response.status = 400;
      context.response.body = { message: "mobileNumber field is required" };
      return;
    } else if (!userInput?.password) {
      context.response.status = 400;
      context.response.body = { message: "password field is required" };
      return;
    }

    const user = new User(
      userInput.mobileNumber,
      userInput.password,
      userInput.username,
    );

    try {
      const id: string = await userService.createUser(user);
      context.response.headers.set("Set-Cookie", `Bearer ${id}`);
      context.response.body = { id };
      context.response.status = 201;
    } catch (error: any) {
      console.error(error.message);
      context.response.status = 500;
      context.response.body = { message: "Internal Server Error" };
    }
  }
}
