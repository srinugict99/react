class Department {
  private employees: string[] = [];
  constructor(private id: string, public name: string) {
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('d1', 'HR');
accounting.addEmployee('bsr');
accounting.addEmployee('sr');
accounting.describe();
accounting.name = 'NEW NAME';
accounting.printEmployeeInformation();