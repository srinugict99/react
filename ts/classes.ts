class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log('Department: ' + this.name);
  }
}

const accounting = new Department('HR');

accounting.describe();
