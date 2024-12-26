import { Router } from "jsr:@oak/oak";

const router = new Router();

router.post("/register", async (ctx) => {
  ctx.response.status = 201;
  ctx.response.body = `user registered`;
}).post("/login", async (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = `user logged in`;
  ctx.response.headers.set(
    "Set-Cookie",
    "cookie for authentication",
  );
}).get("/logout", async (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = `user logged out`;
}).delete("/", async (ctx) => {
  const requestBody = await ctx.request.body.json();

  ctx.response.status = 200;
  ctx.response.body = `user with id ${requestBody.id} deleted successfully`;
});
router.get("/", async (context) => {
  context.response.body = "user route";
});

export const userRouter = router;
