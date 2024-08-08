import { connectToDatabase } from '../../../db';

export async function GET() {
  try {
    const pool = await connectToDatabase();
    const result = await pool.request().query('SELECT * FROM Folders WHERE folder_name = \'Root Folder\'');
    return new Response(JSON.stringify(result.recordset), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('Database query failed', err);
    return new Response(JSON.stringify({ error: 'Database query failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
