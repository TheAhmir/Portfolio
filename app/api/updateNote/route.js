import { connectToDatabase } from '../../../db';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const noteId = searchParams.get('note_id'); // Use 'note_id' to match the query parameter
  const noteTitle = searchParams.get('note_title'); // Get note_title from the query parameters
  const noteContent = searchParams.get('note_content'); // Get note_content from the query parameters
  const updatedAt = searchParams.get('updated_at'); // Get updated_at from the query parameters

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
      .input('noteTitle', noteTitle)
      .input('noteContent', noteContent)
      .input('updated_at', updatedAt)
      .query(`
        UPDATE Notes
        SET note_title = @noteTitle, note_content = @noteContent, updated_at = @updated_at
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
