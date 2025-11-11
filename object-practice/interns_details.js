const INTERNS = [
  { name: 'Sanket Pawar', age: 19, state: 'MH' },
  { name: 'Gopi Vinay', age: 20, state: 'AP' },
  { name: 'Pradipta Dey', age: 19, state: 'WB' },
  { name: 'Vivek Bharadwaj', age: 21, state: 'UP' },
  { name: 'Deepak Bahuguna', age: 22, state: 'UK' },
  { name: 'Dinesh Kumar', age: 20, state: 'Delhi' },
  { name: 'Gautham Krishna', age: 20, state: 'Kerala' },
  { name: 'Hem Pradeep', age: 20, state: 'AP' },
  { name: 'Rahul Vishwakarma', age: 22, state: 'UP' },
  { name: 'Sagnik Ghosh', age: 20, state: 'WB' },
  { name: 'Santo K', age: 20, state: 'Kerala' },
  { name: 'Ayush Varma', age: 19, state: 'Delhi' },
  { name: 'Yash Gairola', age: 20, state: 'UK' },
];

// Display the details of interns from Kerala
console.log(INTERNS.filter(i => i.state === 'Kerala'));

// Display the details of interns whose name starts with 's'
console.log(INTERNS.filter(x => x.name.startsWith('S')));