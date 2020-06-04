import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import { getEmployee } from "./controller/EmployeeController.ts";
const app = new Application();

const env = config();
const route = new Router();
app.use(route.routes());
app.use(route.allowedMethods());

route.get("/getEmployee", getEmployee)
.post('/addEmployee',addEmployee());

app.listen({ port: 5000 });
