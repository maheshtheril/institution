import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import asyncHandler from 'express-async-handler';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

// Basic Auth Login
app.post('/api/auth/login', asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

  // For demonstration: Real logic would involve bcrypt and actual DB lookup
  const user = await prisma.user.findUnique({
    where: { email },
    include: { student: true }
  });

  if (!user || user.password !== password || user.role !== role) {
    res.status(401).json({ message: 'Invalid credentials or role mismatch' });
    return;
  }

  res.json({
    id: user.id,
    name: user.name,
    role: user.role,
    studentId: user.student?.admissionId
  });
}));

// Create Initial Admin (Seed helper)
app.post('/api/auth/seed', asyncHandler(async (req, res) => {
  const admin = await prisma.user.upsert({
    where: { email: 'admin@aadhyashree.com' },
    update: {},
    create: {
      email: 'admin@aadhyashree.com',
      name: 'Institutional Admin',
      password: 'admin123',
      role: 'ADMIN'
    }
  });
  res.json(admin);
}));

app.listen(PORT, () => {
  console.log(`Institution Backend running on http://localhost:${PORT}`);
});
