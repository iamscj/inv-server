import pg from "pg";
const { Pool } = pg;

export const pool = new Pool({
    user: 'bhel',
    host: 'dpg-chcf7uqk728tp990hqq0-a.oregon-postgres.render.com',
    database: 'bhel',
    password: 'BLwlsi99mzWHudyDXwGtad7z8Fv17NFK',
    port: '5432',
    ssl: {
        rejectUnauthorized: false,
    },
});