import { Application } from "jsr:@oak/oak";
import { router } from "./routes/index.ts";

const PORT: number = 8000;

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: PORT });
