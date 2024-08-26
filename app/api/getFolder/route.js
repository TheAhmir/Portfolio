import { connectToDatabase } from '../../../db';

export async function GET( req, res ) {
    res.setHeader('Cache-Control', 'no-store');
    const { searchParams } = new URL(req.url);
  const folderId = searchParams.get('folder_id'); // Use 'note_id' to match the query parameter

  if (!folderId) {
    return new Response(JSON.stringify({ error: 'Folder ID is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const pool = await connectToDatabase();
    const result = await pool.request()
    .input('folderId', folderId)
    .query(`
      WITH Dir AS (
        SELECT folder_id, 
               parent_folder_id, 
               folder_name, 
               NULL AS note_id, 
               NULL AS note_title,
               created_at, 
               updated_at
        FROM Folders
        WHERE parent_folder_id = (
          SELECT folder_id 
          FROM Folders 
          WHERE folder_id = @folderId
        )
        
        UNION ALL
        
        SELECT NULL AS folder_id, 
               parent_folder_id, 
               NULL AS folder_name, 
               note_id, 
               note_title, 
               created_at, 
               updated_at
        FROM Notes
        WHERE parent_folder_id = (
          SELECT folder_id 
          FROM Folders 
          WHERE folder_id = @folderId
        )
      )
      SELECT * FROM Dir
      ORDER BY updated_at DESC;
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
