import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';

@Module({
  controllers: [EmployeeController],
})
export class EmployeeModule {
  private employee = [];

  getAllEmployee() {
    return this.employee;
  }
  setAllEmployee(employee) {
    this.employee = employee;
  }
}
