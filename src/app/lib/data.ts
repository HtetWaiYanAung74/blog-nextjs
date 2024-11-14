import { createClient } from '@vercel/postgres';
import { sql } from '@vercel/postgres';
 
export async function connectToDB() {
  const client = createClient();
  await client.connect();
 
  try {
    if (client) {
      console.log('Connected to database');
      return client;
    }
  } catch (error) {
    console.error('Error connecting to database', error);
  }
}

export async function getPosts() {
  try {
    const data = await sql`SELECT * from posts`;
    return data.rows;
  } catch (error) {
    console.log('Error getting posts', error);
    
  }
}