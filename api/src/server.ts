import express from 'express'

const app = express()

const PORT = 3000

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' })
})
// routes that doesnt need auth
app.get('/api/jobs', (req, res) => {
  res.status(200).json({ jobs: 'All jobs' })
})
app.get('/api/user', (req, res) => {
  res.status(200).json({ user: 'user signup' })
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
