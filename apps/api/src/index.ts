import 'dotenv/config'
import express from 'express'
import { db } from './db.js'
import { sql } from 'drizzle-orm'

const app = express()

const PORT = Number(process.env.PORT) || 3000

app.use(express.json())

app.get('/health', async (_req, res) => {
  try {
    await db.execute(sql`SELECT 1`)

    res.json({
      status: 'ok',
      service: 'job-harbor-api',
      database: 'connected',
    })
  } catch (error) {
    console.error(error)

    res.status(500).json({
      status: 'error',
      database: 'disconnected',
    })
  }
})

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})