const fs = require('node:fs');

async function generateDynamicRoutes() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users').then(r => r.json());
  const routesData = users.map((user: { id: number; }) => `/users/${user.id}`).join('\n');

  fs.writeFile('users.txt', routesData, () => {});
}

generateDynamicRoutes()
