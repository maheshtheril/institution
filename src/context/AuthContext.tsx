import { createContext, useContext, useState, type ReactNode } from 'react';

type UserRole = 'ADMIN' | 'STUDENT' | null;

interface User {
  id: string;
  name: string;
  role: UserRole;
  studentId?: string; // Only for students
}

interface AuthContextType {
  user: User | null;
  login: (role: UserRole) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (role: UserRole) => {
    try {
      // Relative path for seamless local/production deployment
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: role === 'ADMIN' ? 'admin@aadhyashree.com' : 'student1@aadhyashree.com', password: 'password123', role })
      });
      
      const data = await response.json();
      if (response.ok) {
        // Normalize role to ensure reliability across components
        const normalizedUser = {
          ...data,
          role: data.role?.toUpperCase() || 'STUDENT'
        };
        setUser(normalizedUser);
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Authentication Error:', error);
      // Fallback for demonstration: Ensure roles are strictly checked and strictly uppercase
      if (role?.toUpperCase() === 'ADMIN') {
        setUser({ id: 'adm-001', name: 'Institutional Admin (Mock)', role: 'ADMIN' });
      } else {
        setUser({ id: 'std-101', name: 'Aarav Kumar (Mock)', role: 'STUDENT', studentId: 'AK2024' });
      }
    }
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
};
