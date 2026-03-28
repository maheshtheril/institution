import { Search, Download, Filter, Plus, Clock, FileText, CheckCircle2, CreditCard, ShieldCheck } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Fees = () => {
  const { user } = useAuth();
  const isAdmin = user?.role === 'ADMIN';

  const allFees = [
    { id: '1', student: 'Aarav Kumar', type: 'Monthly Fee', amount: 900, date: '2024-03-28', status: 'Paid', receipt: 'REC-001' },
    { id: '2', student: 'Maya Patel', type: 'Registration', amount: 500, date: '2024-03-27', status: 'Paid', receipt: 'REC-002' },
    { id: '3', student: 'Sai Raghav', type: 'Examination', amount: 1000, date: '2024-03-25', status: 'Paid', receipt: 'REC-003' },
    { id: '4', student: 'Isha Devi', type: 'Monthly Fee', amount: 800, date: '2024-03-24', status: 'Pending', receipt: '-' },
    { id: '5', student: 'Karan Mehra', type: 'Books Fee', amount: 1200, date: '2024-03-21', status: 'Paid', receipt: 'REC-004' },
    { id: '6', student: 'Sonia Rao', type: 'Monthly Fee', amount: 700, date: '2024-03-20', status: 'Pending', receipt: '-' },
  ];

  const myFees = [
    { id: '1', type: 'Monthly Fee', amount: 900, date: '2024-03-28', status: 'Paid', receipt: 'REC-12401' },
    { id: '2', type: 'Books & Kit', amount: 1200, date: '2024-02-15', status: 'Paid', receipt: 'REC-11502' },
    { id: '3', type: 'Registration', amount: 500, date: '2024-01-10', status: 'Paid', receipt: 'REC-10103' },
  ];

  const stats = isAdmin ? [
    { icon: Clock, label: 'Pending Collections', value: '₹5,600', color: 'var(--accent)' },
    { icon: CheckCircle2, label: 'Recent Collections', value: '₹42,800', color: 'var(--green)' },
    { icon: FileText, label: 'Outstanding Exam Fees', value: '₹12,000', color: 'var(--red)' }
  ] : [
    { icon: CreditCard, label: 'Total Paid', value: '₹2,600', color: 'var(--green)' },
    { icon: Clock, label: 'Next Due Date', value: '15th Apr', color: 'var(--accent)' },
    { icon: ShieldCheck, label: 'Current Balance', value: '₹0.00', color: 'var(--primary)' }
  ];

  return (
    <div className="animate-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h2 style={{ fontSize: '32px' }}>{isAdmin ? 'Fees Management' : 'My Payments & Invoices'}</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            {isAdmin ? 'Track payments for registrations, books, and tuition' : 'View your transaction history and upcoming dues'}
          </p>
        </div>
        {isAdmin ? (
          <button className="premium-button">
            <Plus size={18} /> Collect New Payment
          </button>
        ) : (
          <button className="premium-button">
            <CreditCard size={18} /> Pay Online Now
          </button>
        )}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        {stats.map((s, i) => (
          <div key={i} className="glass-card" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px', border: '1px solid hsla(0,0%,100%,0.05)' }}>
            <div style={{ padding: '12px', background: `${s.color}15`, borderRadius: '12px' }}>
              <s.icon size={24} color={s.color} />
            </div>
            <div>
              <div style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '4px' }}>{s.label}</div>
              <div style={{ fontSize: '20px', fontWeight: 700 }}>{s.value}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card" style={{ overflow: 'hidden', border: '1px solid hsla(0,0%,100%,0.05)' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.01)', flexWrap: 'wrap', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '12px', flex: 1, minWidth: '300px' }}>
            <div style={{ position: 'relative', flex: 1, maxWidth: '400px' }}>
              <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
              <input 
                className="premium-input" 
                placeholder={isAdmin ? "Search by student name or receipt..." : "Search in my receipts..."}
                style={{ paddingLeft: '40px' }}
              />
            </div>
            {isAdmin && (
                <button className="premium-button" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
                <Filter size={18} /> Filters
                </button>
            )}
          </div>
          {isAdmin && (
            <button className="premium-button" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
                <Download size={18} /> Export CSV
            </button>
          )}
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                {(isAdmin ? ['Student Name', 'Fee Type', 'Amount', 'Date', 'Status', 'Receipt', ''] : ['Payment Type', 'Amount', 'Date', 'Status', 'Receipt ID', 'Action'])
                .map((h, i) => (
                  <th key={i} style={{ padding: '16px 24px', fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {(isAdmin ? allFees : myFees).map((fee: any, i) => (
                <tr key={ fee.id } style={{ borderBottom: '1px solid var(--border)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.01)', transition: '0.2s' }}>
                  {isAdmin && <td style={{ padding: '20px 24px', fontWeight: 600 }}>{fee.student}</td>}
                  <td style={{ padding: '20px 24px' }}>
                    <span style={{ fontSize: '12px', padding: '4px 12px', borderRadius: '20px', background: 'var(--primary-glow)', color: 'var(--primary)', fontWeight: 700 }}>
                      {fee.type}
                    </span>
                  </td>
                  <td style={{ padding: '20px 24px', fontWeight: 700 }}>₹{fee.amount}</td>
                  <td style={{ padding: '20px 24px', fontSize: '14px', color: 'var(--text-muted)' }}>{fee.date}</td>
                  <td style={{ padding: '20px 24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 700, color: fee.status === 'Paid' ? 'var(--green)' : 'var(--accent)' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'currentColor' }} />
                      {fee.status}
                    </div>
                  </td>
                  <td style={{ padding: '20px 24px', fontSize: '13px', color: 'var(--text-muted)' }}>{fee.receipt}</td>
                  <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                    <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Download size={14} /> {isAdmin ? '' : 'Receipt'}
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
