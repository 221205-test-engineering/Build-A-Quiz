
// `...` refers to spread syntax. 
//The syntax can be used to "spread" the elements of an array or object 
//into a new array or object.
export const shuffleArray = (array: any[]) =>
[...array].sort(() => Math.random() - 0.5);

