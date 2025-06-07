import express from 'express';
import { Pool } from 'pg';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT ? Number(process.env.PGPORT) : undefined
});

app.post('/api/users', async (req, res) => {
  const { nom, prenom, adresse, email, telephone, dateCreation } = req.body;
  try {
    await pool.query(
      'INSERT INTO users (nom, prenom, adresse, email, telephone, "dateCreation") VALUES ($1, $2, $3, $4, $5, $6)',
      [nom, prenom, adresse, email, telephone, dateCreation]
    );
    res.json({ success: true });
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).json({ success: false, error: 'database_error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
