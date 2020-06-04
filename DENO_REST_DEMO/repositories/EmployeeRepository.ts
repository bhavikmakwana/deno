import IEmployee from "../entity/IEmployee.ts";
import db from "../config/mongo.ts";

const database = db.getDatabase;
const employeesCollection = database.collection("employees");
class EmployeeRepository {
  constructor() {}

  async find() {
    const employee = await employeesCollection.find();
    return employee;
  }

  async insertOne(recipe: IEmployee) {
    const { $oid } = await employeesCollection.insertOne(recipe);
    return $oid;
  }
}

export default EmployeeRepository;
