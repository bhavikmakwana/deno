import { Application } from "https://deno.land/x/oak/mod.ts";
import routes from "./routes.ts";

const app = new Application();
const port = 5000;

//Middleware
app.use(routes.routes());
app.use(routes.allowedMethods());

console.log(`Server list port ${port}`);
await app.listen({ port });
