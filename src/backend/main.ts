import { Application } from "jsr:@oak/oak";

const PORT: number = 8000;

const app = new Application();

app.use(() => {
  console.log("server is running on port " + PORT);
});

app.listen({ port: PORT });
