
const person = {
  name: 'bsr',
  age: 30,
  hobbies: ['Sports', 'running']
};

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
