import EmployeeRepository from "../repositories/EmployeeRepository.ts";

class EmployeeService {
  constructor() {}

  readonly employeeRepository = new EmployeeRepository();

  getEmployee = async () => {
    return await this.employeeRepository.find();
  };
}
export default EmployeeService;
