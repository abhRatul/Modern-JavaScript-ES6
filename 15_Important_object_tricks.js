// Object.keys(), .values(), and .entries()
// Example
const settings = { theme: "dark", volume: 80 };

console.log(Object.keys(settings));
console.log(Object.values(settings));
console.log(Object.entries(settings));

// Property Shorthand
const name = "Alice";
const speed = "Fast";

// Instead of { name: name, speed: speed }
const runner = { name, speed }; 

console.log(runner); // Output: { name: "Alice", speed: "Fast" }



