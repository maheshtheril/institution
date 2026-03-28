import { Search, Download, Filter, Plus, Clock, FileText, CheckCircle2 } from 'lucide-react'

const Fees = () => {
  const fees = [
    { id: '1', student: 'Aarav Kumar', type: 'Monthly Fee', amount: 900, date: '2024-03-28', status: 'Paid', receipt: 'REC-001' },
    { id: '2', student: 'Maya Patel', type: 'Registration', amount: 500, date: '2024-03-27', status: 'Paid', receipt: 'REC-002' },
    { id: '3', student: 'Sai Raghav', type: 'Examination', amount: 1000, date: '2024-03-25', status: 'Paid', receipt: 'REC-003' },
    { id: '4', student: 'Isha Devi', type: 'Monthly Fee', amount: 800, date: '2024-03-24', status: 'Pending', receipt: '-' },
    { id: '5', student: 'Karan Mehra', type: 'Books Fee', amount: 1200, date: '2024-03-21', status: 'Paid', receipt: 'REC-004' },
    { id: '6', student: 'Sonia Rao', type: 'Monthly Fee', amount: 700, date: '2024-03-20', status: 'Pending', receipt: '-' },
  ];

  return (
    <div className="animate-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '32px' }}>Fees Management</h2>
          <p style={{ color: 'var(--text-muted)' }}>Track payments for registrations, books, and tuition</p>
        </div>
        <button className="premium-button">
          <Plus size={18} /> Collect New Payment
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '32px' }}>
        {[
          { icon: Clock, label: 'Pending Collections', value: '₹5,600', color: 'var(--accent)' },
          { icon: CheckCircle2, label: 'Recent Collections', value: '₹42,800', color: 'var(--green)' },
          { icon: FileText, label: 'Outstanding Exam Fees', value: '₹12,000', color: 'var(--red)' }
        ].map((s, i) => (
          <div key={i} className="glass-card" style={{ padding: '20px', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ padding: '12px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
              <s.icon size={24} color={s.color} />
            </div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{s.label}</div>
              <div style={{ fontSize: '20px', fontWeight: 700 }}>{s.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card" style={{ overflow: 'hidden' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ display: 'flex', gap: '12px', flex: 1 }}>
            <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                className="premium-input" 
                placeholder="Search by student name or receipt..." 
                style={{ paddingLeft: '40px' }}
              />
            </div>
            <button className="premium-button" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
              <Filter size={18} /> Filters
            </button>
          </div>
          <button className="premium-button" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
            <Download size={18} /> Export CSV
          </button>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
                {['Student Name', 'Fee Type', 'Amount', 'Date', 'Status', 'Receipt', ''].map((h, i) => (
                  <th key={i} style={{ padding: '16px 24px', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {fees.map((fee, i) => (
                <tr key={ fee.id } style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)' }}>
                  <td style={{ padding: '20px 24px', fontWeight: 500 }}>{fee.student}</td>
                  <td style={{ padding: '20px 24px' }}>
                    <span style={{ fontSize: '13px', padding: '4px 10px', borderRadius: '20px', background: 'var(--primary-glow)', color: 'var(--primary)', fontWeight: 600 }}>
                      {fee.type}
                    </span>
                  </td>
                  <td style={{ padding: '20px 24px', fontWeight: 600 }}>₹{fee.amount}</td>
                  <td style={{ padding: '20px 24px', fontSize: '14px', color: 'var(--text-muted)' }}>{fee.date}</td>
                  <td style={{ padding: '20px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 600, color: fee.status === 'Paid' ? 'var(--green)' : 'var(--accent)' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: fee.status === 'Paid' ? 'var(--green)' : 'var(--accent)' }} />
                      {fee.status}
                    </div>
                  </td>
                  <td style={{ padding: '20px 24px', fontSize: '13px', color: 'var(--text-muted)' }}>{fee.receipt}</td>
                  <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}>
                      <Download size={16} />
                    </button>
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

export default Fees
