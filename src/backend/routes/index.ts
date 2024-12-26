import { Router } from "jsr:@oak/oak";
import { userRouter } from "./userRoute.ts";

export const router = new Router();

router.use("/user", userRouter.routes());
