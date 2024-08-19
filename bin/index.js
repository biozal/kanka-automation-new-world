#!/usr/bin/env node
const { createLocation } = require('./location');

// Call the function
async function main() {
  await createLocation('bin/data/cities/test.json');
}

main();
