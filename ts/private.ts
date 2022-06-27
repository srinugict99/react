class Department {
  public name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log('dept' + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department('HR');
accounting.addEmployee('bsr');
accounting.addEmployee('sr');

accounting.describe();
accounting.name = 'another name';
accounting.printEmployeeInformation();