import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { log } from "@monorepo/utils";

const app = new Elysia()
  .use(cors())
  .get("/", () => "Hello Elysia")
  .get("api/v1/health", () => ({ "status": "ok" }))
  .listen(process.env.PORT || 3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

log;