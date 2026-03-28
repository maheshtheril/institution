import { useState, useEffect } from 'react'
import { Routes, Route, NavLink, useLocation, Navigate } from 'react-router-dom'
import { 
  Calendar, 
  Video, 
  CreditCard, 
  MessageSquare, 
  Bell, 
  LayoutDashboard,
  UserPlus,
  Menu,
  X,
  LogOut,
  User as UserIcon,
  ShieldAlert
} from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

// Context & Auth Page
import { AuthProvider, useAuth } from './context/AuthContext'
import Login from './pages/Login'

// Page Imports
import Dashboard from './pages/Dashboard'
import Registration from './pages/Registration'
import Attendance from './pages/Attendance'
import Fees from './pages/Fees'
import Videos from './pages/Videos'
import Support from './pages/Support'
import Announcements from './pages/Announcements'

function AppContent() {
  const { user, logout } = useAuth();
  const location = useLocation();
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setSidebarOpen(true);
      else setSidebarOpen(false);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1024) setSidebarOpen(false);
  }, [location.pathname]);

  if (!user) {
    return <Login />;
  }

  const navItems = [
    { title: 'Overview', path: '/', icon: LayoutDashboard, roles: ['ADMIN', 'STUDENT'] },
    { title: 'Registration', path: '/register', icon: UserPlus, roles: ['ADMIN'] },
    { title: 'Attendance', path: '/attendance', icon: Calendar, roles: ['ADMIN', 'STUDENT'] },
    { title: 'Fees', path: '/fees', icon: CreditCard, roles: ['ADMIN', 'STUDENT'] },
    { title: 'Class Videos', path: '/videos', icon: Video, roles: ['ADMIN', 'STUDENT'] },
    { title: 'Support Context', path: '/support', icon: MessageSquare, roles: ['ADMIN', 'STUDENT'] },
    { title: 'Announcements', path: '/announcements', icon: Bell, roles: ['ADMIN', 'STUDENT'] },
  ];

  const filteredNav = navItems.filter(item => item.roles.includes(user.role!));

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)', color: 'white' }}>
      {/* Mobile Top Bar */}
      <div style={{ 
        position: 'fixed', top: 0, left: 0, right: 0, height: '64px', 
        background: 'var(--surface)', backdropFilter: 'var(--glass)',
        borderBottom: '1px solid var(--border)',
        display: window.innerWidth <= 1024 ? 'flex' : 'none',
        alignItems: 'center', justifyContent: 'space-between',
        padding: '0 20px', zIndex: 100 
      }}>
        <span style={{ fontWeight: 700, fontSize: '16px', letterSpacing: '0.05em' }}>AADHYASHREE</span>
        <button 
           onClick={() => setSidebarOpen(!isSidebarOpen)}
           style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}
        >
           {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isSidebarOpen && window.innerWidth <= 1024 && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSidebarOpen(false)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', zIndex: 90 }}
          />
        )}
      </AnimatePresence>

      <motion.nav 
        initial={false}
        animate={{ x: isSidebarOpen ? 0 : -280, width: isSidebarOpen ? 280 : 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        style={{ 
          borderRight: '1px solid var(--border)', padding: '32px 20px',
          display: 'flex', flexDirection: 'column', gap: '40px',
          background: 'var(--surface)', backdropFilter: 'var(--glass)',
          position: window.innerWidth <= 1024 ? 'fixed' : 'sticky',
          top: 0, left: 0, height: '100vh', zIndex: 150,
          overflowY: 'hidden', whiteSpace: 'nowrap'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ 
            minWidth: '40px', height: '40px', background: 'var(--primary)', 
            borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'white', fontWeight: 'bold', boxShadow: '0 0 20px var(--primary-glow)'
          }}>{user.role?.[0]}</div>
          <span style={{ fontWeight: 700, fontSize: '18px', letterSpacing: '0.05em' }}>AADHYASHREE</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1, overflowY: 'auto' }}>
          {filteredNav.map((item) => (
            <NavLink
              key={item.path} to={item.path}
              className={({ isActive }) => `sidebar-link ${isActive ? 'active' : ''}`}
              style={({ isActive }) => ({
                display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px',
                textDecoration: 'none', color: isActive ? 'var(--primary)' : 'var(--text-muted)',
                background: isActive ? 'var(--primary-glow)' : 'transparent',
                transition: 'all 0.2s', fontWeight: isActive ? 600 : 400,
                border: isActive ? '1px solid hsla(265, 85%, 65%, 0.1)' : '1px solid transparent'
              })}
            >
              <item.icon size={20} /> {item.title}
            </NavLink>
          ))}
        </div>

        <div style={{ marginTop: 'auto', paddingTop: '20px', borderTop: '1px solid var(--border)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="glass-card" style={{ padding: '16px', borderRadius: '16px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
             <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {user.role === 'ADMIN' ? <ShieldAlert size={14} color="var(--primary)" /> : <UserIcon size={14} color="var(--text-muted)" />}
             </div>
             <div style={{ minWidth: 0, flex: 1 }}>
                <p style={{ fontSize: '13px', fontWeight: 600, margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user.name}</p>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0 }}>{user.role}</p>
             </div>
          </div>
          <button 
             onClick={logout}
             className="premium-button" 
             style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-muted)', padding: '10px', justifyContent: 'center' }}
          >
             <LogOut size={16} /> Sign Out
          </button>
        </div>
      </motion.nav>

      <main style={{ 
        flex: 1, padding: window.innerWidth <= 768 ? '80px 16px 40px' : '40px', 
        overflowY: 'auto', maxWidth: '100%', boxSizing: 'border-box'
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            <Routes location={location}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/register" element={user.role === 'ADMIN' ? <Registration /> : <Navigate to="/" />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/fees" element={<Fees />} />
              <Route path="/videos" element={<Videos />} />
              <Route path="/support" element={<Support />} />
              <Route path="/announcements" element={<Announcements />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
export default App
