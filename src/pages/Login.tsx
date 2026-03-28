import { useState } from 'react'
import { LogIn, User, ShieldCheck, Mail, Lock, Smartphone, ChevronRight } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Login = () => {
    const { login } = useAuth();
    const [loginType, setLoginType] = useState<'ADMIN' | 'STUDENT'>('STUDENT');

    return (
        <div style={{ 
            height: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            padding: '24px'
        }}>
            <div className="glass-card animate-in" style={{ 
                maxWidth: '450px', 
                width: '100%', 
                padding: '48px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative Elements */}
                <div style={{ position: 'absolute', top: '-50px', left: '-50px', width: '150px', height: '150px', background: 'var(--primary-glow)', borderRadius: '50%', filter: 'blur(40px)', opacity: 0.5 }} />
                <div style={{ position: 'absolute', bottom: '-50px', right: '-50px', width: '150px', height: '150px', background: 'var(--accent)', borderRadius: '50%', filter: 'blur(40px)', opacity: 0.2 }} />

                <img 
                    src="/pwa-192x192.png" 
                    alt="Aadhyashree Natyalaya Logo" 
                    style={{ 
                        width: '80px', height: '80px', 
                        margin: '0 auto 24px', 
                        display: 'block',
                        borderRadius: '20px',
                        boxShadow: '0 0 30px var(--primary-glow)'
                    }} 
                />

                <h1 style={{ fontSize: '28px', marginBottom: '8px', fontWeight: 800 }}>Aadhyashree Natyalaya</h1>
                <p style={{ color: 'var(--text-muted)', marginBottom: '40px', fontSize: '15px' }}>Authentic Classical Dance Institutional Portal</p>

                <div style={{ 
                    display: 'flex', background: 'rgba(255,255,255,0.03)', 
                    padding: '4px', borderRadius: '12px', marginBottom: '32px' 
                }}>
                    <button 
                        onClick={() => setLoginType('STUDENT')}
                        style={{ 
                            flex: 1, padding: '10px', borderRadius: '8px', border: 'none',
                            background: loginType === 'STUDENT' ? 'var(--surface)' : 'transparent',
                            color: loginType === 'STUDENT' ? 'white' : 'var(--text-muted)',
                            cursor: 'pointer', transition: '0.2s', fontWeight: 600,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
                        }}
                    >
                        <User size={16} /> Student
                    </button>
                    <button 
                         onClick={() => setLoginType('ADMIN')}
                         style={{ 
                            flex: 1, padding: '10px', borderRadius: '8px', border: 'none',
                            background: loginType === 'ADMIN' ? 'var(--surface)' : 'transparent',
                            color: loginType === 'ADMIN' ? 'white' : 'var(--text-muted)',
                            cursor: 'pointer', transition: '0.2s', fontWeight: 600,
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
                         }}
                    >
                        <ShieldCheck size={16} /> Admin
                    </button>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', textAlign: 'left', marginBottom: '32px' }}>
                    <div style={{ position: 'relative' }}>
                        <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input className="premium-input" placeholder="Registered Email or Admission ID" style={{ paddingLeft: '48px' }} />
                    </div>
                    <div style={{ position: 'relative' }}>
                        <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input type="password" className="premium-input" placeholder="Access Password" style={{ paddingLeft: '48px' }} />
                    </div>
                    <div style={{ textAlign: 'right', marginTop: '-4px' }}>
                        <a href="#" style={{ color: 'var(--primary)', fontSize: '13px', textDecoration: 'none' }}>Forgot Access Key?</a>
                    </div>
                </div>

                <button 
                    className="premium-button" 
                    style={{ width: '100%', justifyContent: 'center', padding: '16px', gap: '12px', fontSize: '16px' }}
                    onClick={() => login(loginType)}
                >
                    <LogIn size={20} /> Authenticate Session <ChevronRight size={18} />
                </button>

                <div style={{ marginTop: '32px', display: 'flex', alignItems: 'center', gap: '12px', justifyContent: 'center', color: 'var(--text-muted)', fontSize: '13px' }}>
                    <Smartphone size={16} /> Register with Phone? <a href="#" style={{ color: 'white', fontWeight: 600, textDecoration: 'none' }}>Apply Now</a>
                </div>
            </div>
        </div>
    )
}

export default Login
