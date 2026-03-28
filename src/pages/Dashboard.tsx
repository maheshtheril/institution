import { Users, CreditCard, Video, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'

const Dashboard = () => {
  return (
    <div className="animate-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '36px', fontWeight: 800 }}>Institue Overview</h1>
          <p style={{ color: 'var(--text-muted)' }}>Welcome, Administrator</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="premium-button" style={{ background: 'var(--surface)', color: 'var(--text)', border: '1px solid var(--border)' }}>Print Monthly Report</button>
          <button className="premium-button">Generate Year-end Invoice</button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
        {[
          { icon: Users, label: 'Active Students', value: '1,240', change: '+24 this month', color: 'var(--primary)' },
          { icon: CreditCard, label: 'Receivables', value: '₹1,24,500', change: '₹12,400 pending', color: 'var(--accent)' },
          { icon: Video, label: 'New Video Uploads', value: '45', change: '12 awaiting review', color: 'var(--green)' },
          { icon: Calendar, label: 'Average Attendance', value: '94%', change: '+2% from last month', color: 'var(--red)' }
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card" 
            style={{ padding: '24px', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: '-10px', right: '-10px', opacity: 0.1 }}>
              <stat.icon size={80} color={stat.color} />
            </div>
            <stat.icon size={20} color={stat.color} style={{ marginBottom: '16px' }} />
            <h4 style={{ color: 'var(--text-muted)', fontSize: '14px', marginBottom: '8px' }}>{stat.label}</h4>
            <div style={{ fontSize: '28px', fontWeight: 700, marginBottom: '8px' }}>{stat.value}</div>
            <p style={{ fontSize: '13px', color: stat.change.includes('+') ? 'var(--green)' : stat.change.includes('-') ? 'var(--red)' : 'var(--accent)' }}>
              {stat.change}
            </p>
          </motion.div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <div className="glass-card" style={{ padding: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
             <h3>Recent Activities</h3>
             <a href="#" style={{ color: 'var(--primary)', fontSize: '14px', textDecoration: 'none' }}>View All</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
             {[
               { user: 'Rahul Sharma', action: 'Uploaded Class Video', time: '2 mins ago', amount: null },
               { user: 'Anjali Gupta', action: 'Paid Monthly Fee', time: '15 mins ago', amount: '₹900' },
               { user: 'Vikram Singh', action: 'New Student Registration', time: '1 hour ago', amount: '₹500' },
               { user: 'Sita Ram', action: 'Attendance Marked', time: '3 hours ago', amount: null },
             ].map((activity, i) => (
               <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '12px', borderRadius: '12px', background: 'rgba(255,255,255,0.02)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-glow)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {activity.user[0]}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600 }}>{activity.user}</div>
                    <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{activity.action}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    {activity.amount && <div style={{ color: 'var(--green)', fontWeight: 600 }}>{activity.amount}</div>}
                    <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{activity.time}</div>
                  </div>
               </div>
             ))}
          </div>
        </div>

        <div className="glass-card" style={{ padding: '32px' }}>
          <h3>Fees Overview</h3>
          <div style={{ marginTop: '24px', height: '200px', display: 'flex', alignItems: 'flex-end', gap: '12px', justifyContent: 'space-between' }}>
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
          <div style={{ marginTop: '24px', padding: '16px', borderRadius: '12px', background: 'var(--background)' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
               <span style={{ fontSize: '13px' }}>Monthly Target</span>
               <span style={{ fontSize: '13px', fontWeight: 600 }}>₹1,50,000</span>
             </div>
             <div style={{ height: '8px', background: 'var(--border)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ width: '83%', height: '100%', background: 'var(--primary)' }} />
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
