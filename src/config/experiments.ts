

// type Constructor<T = {}> = new (...args: any[]) => T;

// function combineClasse2s(classes: Constructor[]): Constructor {
//   const combineClassesHelper = (depth: number): Constructor => {
//     if (depth < 0) {
//       return class {};
//     }
//     const CurrentClass = classes[depth];
//     const ParentClass = combineClassesHelper(depth - 1);
//     return class CombinedClass extends ParentClass {
//       constructor(...args: any[]) {
//         super(...args);
//         const currentInstance = new CurrentClass(...args);
//         Object.assign(this, currentInstance);
//       }
//     };
//   };
//   const combinedClass = combineClassesHelper(classes.length - 1);
//   Object.defineProperty(combinedClass, 'name', { value: 'CombinedClass' });

//   return combinedClass;
// }