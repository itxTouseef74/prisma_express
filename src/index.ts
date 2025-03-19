import express from 'express';
import { PrismaClient } from '@prisma/client';



const app = express();
const prisma = new PrismaClient();
app.use(express.json());

// POST API ENDPOINT

app.post('/items', async (req, res) => {
    const { name, value } = req.body;
    const item = await prisma.item.create({
        data: {
            name: name, 
            value: value 
        }
    });
  res.json(item);
});

// GET API ENDPOINT

app.get('/items', async (req, res) => {
  const items = await prisma.item.findMany();
  res.json(items);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});