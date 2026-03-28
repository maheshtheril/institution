import { Calendar, UserCheck, UserX, Clock, ChevronLeft, ChevronRight, Search, Download, Users, History } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Attendance = () => {
  const { user } = useAuth();
  const isAdmin = user?.role?.toUpperCase() === 'ADMIN';

  const allStudents = [
    { id: '1', name: 'Aarav Kumar', class: 'Junior', attendance: '92%', status: 'Present', date: '28 Mar' },
    { id: '2', name: 'Maya Patel', class: 'Advanced', attendance: '88%', status: 'Present', date: '28 Mar' },
    { id: '3', name: 'Sai Raghav', class: 'Intermediate', attendance: '95%', status: 'Absent', date: '28 Mar' },
    { id: '4', name: 'Isha Devi', class: 'Junior', attendance: '80%', status: 'Late', date: '28 Mar' },
    { id: '5', name: 'Karan Mehra', class: 'Intermediate', attendance: '85%', status: 'Present', date: '28 Mar' },
  ];

  const myHistory = [
    { date: '28 Mar 2024', status: 'Present', time: '10:30 AM', class: 'Kathak Intermediate' },
    { date: '26 Mar 2024', status: 'Present', time: '10:25 AM', class: 'Kathak Intermediate' },
    { date: '24 Mar 2024', status: 'Absent', time: '-', class: 'Kathak Intermediate' },
    { date: '21 Mar 2024', status: 'Late', time: '10:45 AM', class: 'Kathak Intermediate' },
    { date: '19 Mar 2024', status: 'Present', time: '10:28 AM', class: 'Kathak Intermediate' },
  ];

  return (
    <div className="animate-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h2 style={{ fontSize: '32px' }}>{isAdmin ? 'Attendance Management' : 'My Attendance Record'}</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            {isAdmin ? 'Daily attendance tracking and institutional reports' : `View your personal attendance history for ${user?.studentId || 'session'}`}
          </p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          {isAdmin ? (
            <>
              <button className="premium-button" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
                <Download size={18} /> Export CSV
              </button>
              <button className="premium-button">
                <UserCheck size={18} /> Bulk Mark Today
              </button>
            </>
          ) : (
             <button className="premium-button">
                <Calendar size={18} /> Request Leave
             </button>
          )}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        {[
          { label: isAdmin ? 'Total Present' : 'Days Present', value: isAdmin ? '112' : '24', sub: isAdmin ? '92.4%' : '90%', icon: UserCheck, color: 'var(--green)' },
          { label: isAdmin ? 'Total Absent' : 'Days Absent', value: isAdmin ? '8' : '2', sub: isAdmin ? '6.6%' : '8%', icon: UserX, color: 'var(--red)' },
          { label: isAdmin ? 'Late/Delayed' : 'Days Late', value: isAdmin ? '4' : '1', sub: isAdmin ? '1.0%' : '2%', icon: Clock, color: 'var(--accent)' },
          { label: isAdmin ? 'Total Scheduled' : 'Current Batch', value: isAdmin ? '124' : 'Kathak B2', sub: isAdmin ? 'All Batches' : '10:30 AM', icon: Calendar, color: 'var(--primary)' }
        ].map((s, i) => (
          <div key={i} className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid hsla(0,0%,100%,0.05)' }}>
            <div style={{ padding: '12px', background: `${s.color}15`, borderRadius: '12px' }}>
              <s.icon size={22} color={s.color} />
            </div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>{s.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '20px', fontWeight: 700 }}>{s.value}</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500 }}>{s.sub}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card" style={{ overflow: 'hidden', border: '1px solid hsla(0,0%,100%,0.05)' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.01)', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <h3 style={{ fontSize: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
               {isAdmin ? <Users size={18} color="var(--primary)" /> : <History size={18} color="var(--primary)" />}
               {isAdmin ? 'Daily Record: 28th Mar 2024' : 'Recent Session History'}
            </h3>
            {isAdmin && (
                <div style={{ display: 'flex', gap: '8px' }}>
                   <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><ChevronLeft size={20} /></button>
                   <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><ChevronRight size={20} /></button>
                </div>
            )}
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
             <div style={{ position: 'relative' }}>
                <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input className="premium-input" placeholder={isAdmin ? "Search students..." : "Search history..."} style={{ paddingLeft: '40px', width: '250px' }} />
             </div>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
             <thead>
               <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                 {(isAdmin ? ['Student Name', 'Class/Batch', 'Overall Attendance', 'Status', 'Actions'] : ['Session Date', 'Class/Batch', 'Time', 'My Status', 'Record'])
                 .map((h, i) => (
                   <th key={i} style={{ padding: '16px 24px', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>{h}</th>
                 ))}
               </tr>
             </thead>
             <tbody>
               {(isAdmin ? allStudents : myHistory).map((s: any, i) => (
                 <tr key={i} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)', transition: '0.2s' }}>
                   <td style={{ padding: '16px 24px', fontWeight: 600 }}>{isAdmin ? s.name : s.date}</td>
                   <td style={{ padding: '16px 24px', color: 'var(--text-muted)' }}>{s.class}</td>
                   <td style={{ padding: '16px 24px' }}>
                      {isAdmin ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                           <div style={{ flex: 1, minWidth: '80px', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                              <div style={{ width: s.attendance, height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--accent))' }} />
                           </div>
                           <span style={{ fontSize: '12px', fontWeight: 600 }}>{s.attendance}</span>
                        </div>
                      ) : (
                        <span style={{ fontSize: '14px' }}>{s.time}</span>
                      )}
                   </td>
                   <td style={{ padding: '16px 24px' }}>
                      <div style={{ 
                        padding: '4px 12px', 
                        borderRadius: '20px', 
                        fontSize: '11px', 
                        fontWeight: 700,
                        background: s.status === 'Present' ? 'hsla(150, 100%, 30%, 0.15)' : s.status === 'Absent' ? 'hsla(0, 100%, 30%, 0.15)' : 'hsla(45, 100%, 30%, 0.15)',
                        color: s.status === 'Present' ? 'var(--green)' : s.status === 'Absent' ? 'var(--red)' : 'var(--accent)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'currentColor' }} />
                        {s.status}
                      </div>
                   </td>
                   <td style={{ padding: '16px 24px' }}>
                      {isAdmin ? (
                        <div style={{ display: 'flex', gap: '8px' }}>
                           <button style={{ width: '32px', height: '32px', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><UserCheck size={16} /></button>
                           <button style={{ width: '32px', height: '32px', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><UserX size={16} /></button>
                        </div>
                      ) : (
                        <button style={{ color: 'var(--primary)', border: 'none', background: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600 }}>Verify</button>
                      )}
                   </td>
                 </tr>
               ))}
             </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Attendance
