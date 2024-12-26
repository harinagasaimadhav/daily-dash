import { Router } from "jsr:@oak/oak";

const router = new Router();

router.get("/", async (context) => {
  context.response.body = "user route";
});

export const userRouter = router;
