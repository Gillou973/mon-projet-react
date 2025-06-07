# mon-projet-react

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Configure PostgreSQL connection via environment variables:
   - `PGHOST`
   - `PGUSER`
   - `PGPASSWORD`
   - `PGDATABASE`
   - `PGPORT` *(optional, default 5432)*
   
   Alternatively set `DATABASE_URL` with the full connection string.

3. Run the Express server:
   ```bash
   npm run server
   ```

4. In another terminal, start the React dev server:
   ```bash
   npm run dev
   ```

The form in `src/App.jsx` sends a POST request to `/api/users` to insert the data into the `users` table.
