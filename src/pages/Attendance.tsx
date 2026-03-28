import { Calendar, UserCheck, UserX, Clock, ChevronLeft, ChevronRight, Search, Download } from 'lucide-react'

const Attendance = () => {
  const students = [
    { id: '1', name: 'Aarav Kumar', class: 'Junior', attendance: '92%', status: 'Present' },
    { id: '2', name: 'Maya Patel', class: 'Advanced', attendance: '88%', status: 'Present' },
    { id: '3', name: 'Sai Raghav', class: 'Intermediate', attendance: '95%', status: 'Absent' },
    { id: '4', name: 'Isha Devi', class: 'Junior', attendance: '80%', status: 'Late' },
    { id: '5', name: 'Karan Mehra', class: 'Intermediate', attendance: '85%', status: 'Present' },
  ];

  return (
    <div className="animate-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '32px' }}>Attendance Tracking</h2>
          <p style={{ color: 'var(--text-muted)' }}>Daily attendance management and monthly reports</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="premium-button" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
            <Download size={18} /> Monthly Records
          </button>
          <button className="premium-button">
            <UserCheck size={18} /> Mark Today's Attendance
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
        {[
          { label: 'Total Present', value: '112', sub: '92.4%', icon: UserCheck, color: 'var(--green)' },
          { label: 'Absent', value: '8', sub: '6.6%', icon: UserX, color: 'var(--red)' },
          { label: 'Late', value: '4', sub: '1.0%', icon: Clock, color: 'var(--accent)' },
          { label: 'Total Scheduled', value: '124', sub: 'Full capacity', icon: Calendar, color: 'var(--primary)' }
        ].map((s, i) => (
          <div key={i} className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
              <s.icon size={24} color={s.color} />
            </div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{s.label}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '20px', fontWeight: 700 }}>{s.value}</span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{s.sub}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card" style={{ overflow: 'hidden' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <h3 style={{ fontSize: '18px' }}>Daily Record: 28th Mar 2024</h3>
            <div style={{ display: 'flex', gap: '8px' }}>
               <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><ChevronLeft size={20} /></button>
               <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><ChevronRight size={20} /></button>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
             <div style={{ position: 'relative' }}>
                <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input className="premium-input" placeholder="Search student..." style={{ paddingLeft: '40px', width: '250px' }} />
             </div>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
             <thead>
               <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                 {['Student Name', 'Class/Batch', 'Overall Attendance', 'Status', 'Actions'].map((h, i) => (
                   <th key={i} style={{ padding: '16px 24px', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>{h}</th>
                 ))}
               </tr>
             </thead>
             <tbody>
               {students.map((s, i) => (
                 <tr key={i} style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                   <td style={{ padding: '20px 24px', fontWeight: 500 }}>{s.name}</td>
                   <td style={{ padding: '20px 24px' }}>{s.class}</td>
                   <td style={{ padding: '20px 24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                         <div style={{ flex: 1, minWidth: '100px', height: '6px', background: 'rgba(255,255,255,0.05)', borderRadius: '3px', overflow: 'hidden' }}>
                            <div style={{ width: s.attendance, height: '100%', background: 'linear-gradient(90deg, var(--primary), var(--accent))' }} />
                         </div>
                         <span style={{ fontSize: '12px', fontWeight: 600 }}>{s.attendance}</span>
                      </div>
                   </td>
                   <td style={{ padding: '20px 24px' }}>
                      <div style={{ 
                        padding: '4px 12px', 
                        borderRadius: '20px', 
                        fontSize: '12px', 
                        fontWeight: 700,
                        background: s.status === 'Present' ? 'hsla(150, 100%, 30%, 0.2)' : s.status === 'Absent' ? 'hsla(0, 100%, 30%, 0.2)' : 'hsla(45, 100%, 30%, 0.2)',
                        color: s.status === 'Present' ? 'var(--green)' : s.status === 'Absent' ? 'var(--red)' : 'var(--accent)',
                        display: 'inline-block'
                      }}>
                        {s.status}
                      </div>
                   </td>
                   <td style={{ padding: '20px 24px' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                         <button style={{ width: '32px', height: '32px', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--green)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><UserCheck size={16} /></button>
                         <button style={{ width: '32px', height: '32px', borderRadius: '8px', border: '1px solid var(--border)', background: 'transparent', color: 'var(--red)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><UserX size={16} /></button>
                      </div>
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
