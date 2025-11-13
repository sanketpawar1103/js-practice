const interns = {
  name: 'sanket',
  age: 19,
  state: 'karnataka',
  city: 'bengaluru'
};

for (const [key, value] of Object.entries(interns)) {
  console.log(key, value);
}