

const users = [

    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }

];

const adults = users.filter(user => user.age >= 18);

console.log(adults); 