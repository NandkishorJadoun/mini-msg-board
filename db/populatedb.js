#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR ( 255 ),
    username VARCHAR ( 255 ),
    added VARCHAR ( 255 )
);

INSERT INTO messages (text, username, added)
VALUES
    ('Amando', 'Hi there!', 'Wed Oct 01 2025 11:55:51 GMT+0530 (India Standard Time)'),
    ('Charles', 'Hello World', 'Wed Oct 01 2025 01:55:51 GMT+0530 (India Standard Time)');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main()