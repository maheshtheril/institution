import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import asyncHandler from 'express-async-handler';

dotenv.config();

const prisma = new PrismaClient();
const app = express();

app.use(cors());
app.use(express.json());

// API Login
app.post('/api/auth/login', asyncHandler(async (req, res) => {
  const { email, password, role } = req.body;

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
    // @ts-ignore
    studentId: user.student?.admissionId
  });
}));

// Admin Seeding
app.post('/api/auth/seed', asyncHandler(async (_req, res) => {
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

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', database: 'connected (Neon Postgres)' });
});

export default app;
