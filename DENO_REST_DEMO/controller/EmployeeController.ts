import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import EmployeeService from "../service/EmployeeService.ts";

const employeeService = new EmployeeService();

export const getEmployee = async (ctx: RouterContext) => {
  ctx.response.body = employeeService.getEmployee();
};

