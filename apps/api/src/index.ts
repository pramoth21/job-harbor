import express from 'express'

const app = express()

const PORT = 3000

app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    service: 'job-harbor-api',
  })
})

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`)
})