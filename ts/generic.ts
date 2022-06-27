
function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const mergedObj = merge({ name: 'bsr', hobbies: ['Sports'] }, { age: 35 });
console.log(mergedObj);
