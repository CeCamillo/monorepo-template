import { Elysia } from "elysia";
import { log } from "@monorepo/utils";

const app = new Elysia().get("/", () => "Hello Elysia").listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

log;