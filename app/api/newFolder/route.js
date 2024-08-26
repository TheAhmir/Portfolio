import { connectToDatabase } from '../../../db';

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const parentId = searchParams.get('parent_id'); // Use 'note_id' to match the query parameter

  if (!parentId) {
    return new Response(JSON.stringify({ error: 'Parent ID is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const pool = await connectToDatabase();
    const result = await pool.request()
    .input('parentId', parentId)
      .query(`
      `);

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
