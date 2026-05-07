import postgres from 'postgres';
import { Expenses } from './definitions';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });

export async function listExpenses() {
	const data = await sql<Expenses[]>`
    SELECT * FROM expenses;
  `;
	return data;
}
