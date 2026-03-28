import { Users, CreditCard, Video, Calendar, Clock, CheckCircle, GraduationCap, MessageSquare, AlertCircle, PlayCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { useAuth } from '../context/AuthContext'

const Dashboard = () => {
  const { user } = useAuth();
  // Robust case-insensitive check to prevent role-mismatch errors
  const isAdmin = user?.role?.toUpperCase() === 'ADMIN';

  const adminStats = [
    { icon: Users, label: 'Active Students', value: '1,240', change: '+24 this month', color: 'var(--primary)' },
    { icon: CreditCard, label: 'Total Receivables', value: '₹1,24,500', change: '₹12,400 pending', color: 'var(--accent)' },
    { icon: Video, label: 'Video Catalog', value: '45', change: '12 new this week', color: 'var(--green)' },
    { icon: Calendar, label: 'Avg. Attendance', value: '94%', change: '+2% from last month', color: 'var(--red)' }
  ];

  const studentStats = [
    { icon: CheckCircle, label: 'My Attendance', value: '96%', change: 'Excellent standing', color: 'var(--green)' },
    { icon: CreditCard, label: 'Pending Fees', value: '₹0', change: 'All cleared', color: 'var(--primary)' },
    { icon: PlayCircle, label: 'Videos Watched', value: '12/45', change: '4 new available', color: 'var(--accent)' },
    { icon: GraduationCap, label: 'Current Level', value: 'Level 3', change: 'Kathak Basic', color: 'var(--red)' }
  ];

  const stats = isAdmin ? adminStats : studentStats;

  return (
    <div className="animate-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h1 style={{ fontSize: '36px', fontWeight: 800 }}>{isAdmin ? 'Institutional Overview' : 'My Student Portal'}</h1>
          <p style={{ color: 'var(--text-muted)' }}>Welcome back, <span style={{ color: 'white', fontWeight: 600 }}>{user?.name}</span></p>
        </div>
        {isAdmin && (
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="premium-button" style={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' }}>Print Monthly Report</button>
            <button className="premium-button">Generate Year-end Invoice</button>
          </div>
        )}
      </div>

      {/* Statistics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card" 
            style={{ padding: '24px', position: 'relative', overflow: 'hidden', border: '1px solid hsla(0, 0%, 100%, 0.05)' }}
          >
            <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.1 }}>
              <stat.icon size={80} color={stat.color} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${stat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <stat.icon size={18} color={stat.color} />
                </div>
                <h4 style={{ color: 'var(--text-muted)', fontSize: '14px', margin: 0 }}>{stat.label}</h4>
            </div>
            <div style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>{stat.value}</div>
            <p style={{ fontSize: '13px', color: stat.change.includes('+') || stat.change.includes('Excellent') || stat.change.includes('All') ? 'var(--green)' : stat.change.includes('-') ? 'var(--red)' : 'var(--accent)' }}>
              {stat.change}
            </p>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 1100 ? '2fr 1fr' : '1fr', gap: '24px' }}>
        {/* Activity Section */}
        <div className="glass-card" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
             <h3>{isAdmin ? 'Recent Institutional Activities' : 'My Recent Progress'}</h3>
             <a href="#" style={{ color: 'var(--primary)', fontSize: '14px', textDecoration: 'none' }}>View All</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
             {(isAdmin ? [
               { user: 'Rahul Sharma', action: 'Uploaded Class Video', time: '2 mins ago', amount: null, icon: Video },
               { user: 'Anjali Gupta', action: 'Paid Monthly Fee', time: '15 mins ago', amount: '₹900', icon: CreditCard },
               { user: 'Vikram Singh', action: 'New Student Registration', time: '1 hour ago', amount: '₹500', icon: Users },
               { user: 'Sita Ram', action: 'Attendance Marked', time: '3 hours ago', amount: null, icon: Clock },
             ] : [
               { user: 'You', action: 'Marked Attendance (Kathak)', time: 'Today, 10:30 AM', amount: null, icon: Clock },
               { user: 'System', action: 'New Learning Video Added', time: 'Yesterday', amount: null, icon: PlayCircle },
               { user: 'Accounts', action: 'Monthly Invoice Shared', time: '2 days ago', amount: '₹1,200', icon: CreditCard },
               { user: 'Teacher', action: 'Feedback Shared on Module 2', time: '3 days ago', amount: null, icon: MessageSquare },
             ]).map((activity, i) => (
               <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px', borderRadius: '16px', background: 'rgba(255,255,255,0.02)', border: '1px solid hsla(0,0%,100%,0.03)' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'var(--primary)' }}>
                    {activity.icon ? <activity.icon size={20} /> : activity.user[0]}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '15px' }}>{activity.user}</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{activity.action}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    {activity.amount && <div style={{ color: 'var(--green)', fontWeight: 600, fontSize: '14px' }}>{activity.amount}</div>}
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{activity.time}</div>
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* Side Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div className="glass-card" style={{ padding: '32px' }}>
            <h3>{isAdmin ? 'Fees Overview' : 'Learning Progress'}</h3>
            {isAdmin ? (
                <>
                <div style={{ marginTop: '24px', height: '160px', display: 'flex', alignItems: 'flex-end', gap: '12px', justifyContent: 'space-between' }}>
                    {[65, 80, 45, 90, 70, 85].map((h, i) => (
                    <div key={i} style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 0.5 + i * 0.1 }}
                            style={{ background: 'var(--primary)', borderRadius: '6px 6px 0 0', opacity: 0.7 + (i * 0.05) }} 
                        />
                        <span style={{ fontSize: '10px', color: 'var(--text-muted)', textAlign: 'center' }}>M{i+1}</span>
                    </div>
                    ))}
                </div>
                <div style={{ marginTop: '32px', padding: '20px', borderRadius: '16px', background: 'var(--background)', border: '1px solid var(--border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                        <span style={{ fontSize: '14px', color: 'var(--text-muted)' }}>Target ₹1.5L</span>
                        <span style={{ fontSize: '14px', fontWeight: 700 }}>83% Meta</span>
                    </div>
                    <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                        <div style={{ width: '83%', height: '100%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary-glow)' }} />
                    </div>
                </div>
                </>
            ) : (
                <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {[
                        { label: 'Kathak Basics', prog: 100, status: 'Completed' },
                        { label: 'Mudras Intermediate', prog: 65, status: 'In Progress' },
                        { label: 'Rhythm Patterns', prog: 20, status: 'Started' },
                    ].map((course, i) => (
                        <div key={i}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                                <span>{course.label}</span>
                                <span style={{ color: course.prog === 100 ? 'var(--green)' : 'var(--text-muted)' }}>{course.prog}%</span>
                            </div>
                            <div style={{ height: '6px', background: 'var(--border)', borderRadius: '3px', overflow: 'hidden' }}>
                                <div style={{ width: `${course.prog}%`, height: '100%', background: course.prog === 100 ? 'var(--green)' : 'var(--primary)' }} />
                            </div>
                        </div>
                    ))}
                </div>
            )}
            </div>

            <div className="glass-card" style={{ padding: '24px', background: 'var(--primary-glow)', border: '1px solid hsla(265, 85%, 65%, 0.1)' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <div style={{ padding: '10px', background: 'rgba(255,255,255,0.1)', borderRadius: '12px' }}>
                        <AlertCircle size={20} />
                    </div>
                    <div>
                        <h4 style={{ margin: 0, fontSize: '15px' }}>{isAdmin ? 'System Update' : 'Upcoming Event'}</h4>
                        <p style={{ margin: 0, fontSize: '12px', opacity: 0.8 }}>
                            {isAdmin ? 'Backup scheduled for tonight' : 'Annual Day Rehearsal on-site'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

