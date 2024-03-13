import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;
app.use(cors({
  origin: '*'
}));

app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});