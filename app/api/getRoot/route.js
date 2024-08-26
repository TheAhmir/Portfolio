import { connectToDatabase } from '../../../db';

export async function GET() {
  try {
    const pool = await connectToDatabase();
    const result = await pool.request().query(`
      WITH rootDir AS (
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
          WHERE folder_name = 'Root Folder'
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
          WHERE folder_name = 'Root Folder'
        )
      )
      SELECT * FROM rootDir
      ORDER BY updated_at DESC;
    `);
    return new Response(JSON.stringify(result.recordset), {
      status: 200,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Expires': '0',
        'Pragma': 'no-cache'
       },
    });
  } catch (err) {
    console.error('Database query failed', err);
    return new Response(JSON.stringify({ error: 'Database query failed' }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
        'Expires': '0',
        'Pragma': 'no-cache'
       },
    });
  }
}
