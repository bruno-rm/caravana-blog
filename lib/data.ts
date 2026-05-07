import postgres from "postgres";

import { Post } from "./definitions";
//prepare: false, para eliminar cache e não dar imcompatibilidade de tipos quando houver
// alguma alteração em alguma tabela do banco de dados.

export const dynamic = 'force-dynamic' 

const sql = postgres(process.env.DATABASE_URL!, {
  ssl: "require",
  prepare: false,
});

export async function listPosts() {
  const data = await sql<Post[]>`
    SELECT * FROM "Post"
  `;

  return data;
}
