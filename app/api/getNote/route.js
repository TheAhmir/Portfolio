import { connectToDatabase } from '../../../db';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const noteId = searchParams.get('note_id'); // Use 'note_id' to match the query parameter

  if (!noteId) {
    return new Response(JSON.stringify({ error: 'Note ID is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const pool = await connectToDatabase();
    const result = await pool.request()
      .input('noteId', noteId)
      .query(`
        SELECT * FROM Notes
        WHERE note_id = @noteId
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
