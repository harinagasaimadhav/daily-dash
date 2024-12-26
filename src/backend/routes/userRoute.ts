import { Router } from "jsr:@oak/oak";

const router = new Router();

router.post("/register", async (ctx) => {
  ctx.response.body = `user registered`;
});
router.get("/", async (context) => {
  context.response.body = "user route";
});

export const userRouter = router;
