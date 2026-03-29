import { Phone, Mail, Send, CheckCheck, Clock, Paperclip, MoreHorizontal, Smartphone } from 'lucide-react'

const Support = () => {
  const conversations = [
    { id: '1', name: 'Dr. Suresh Kumar (Parent)', lastMsg: 'Does the exam fee include books?', time: '2 mins ago', unread: 2, online: true },
    { id: '2', name: 'Megha Rao (Parent)', lastMsg: 'Aarav will be absent tomorrow.', time: '1 hour ago', unread: 0, online: false },
    { id: '3', name: 'Prateek Singh (Parent)', lastMsg: 'Thanks for the video upload.', time: 'Yesterday', unread: 0, online: true },
    { id: '4', name: 'Institutional Head Office', lastMsg: 'Meeting scheduled at 4 PM.', time: '2 days ago', unread: 0, online: false }
  ];

  return (
    <div className="animate-in" style={{ height: 'calc(100vh - 120px)', display: 'flex', gap: '24px' }}>
      {/* Sidebar: Chat List */}
      <div className="glass-card" style={{ width: '350px', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '24px', borderBottom: '1px solid var(--border)' }}>
          <h2 style={{ fontSize: '24px', marginBottom: '16px' }}>Adhyashree Support</h2>
          <div style={{ position: 'relative' }}>
             <Smartphone size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
             <input className="premium-input" placeholder="Search conversations..." style={{ paddingLeft: '40px' }} />
          </div>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
           {conversations.map((c, i) => (
             <div key={i} style={{ 
               padding: '16px', 
               borderRadius: '16px', 
               marginBottom: '8px', 
               cursor: 'pointer',
               background: i === 0 ? 'var(--primary-glow)' : 'transparent',
               border: i === 0 ? '1px solid var(--primary-glow)' : '1px solid transparent',
               display: 'flex',
               gap: '12px',
               transition: 'all 0.2s'
             }}>
                <div style={{ position: 'relative' }}>
                   <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--secondary)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{c.name[0]}</div>
                   {c.online && <div style={{ position: 'absolute', bottom: '2px', right: '2px', width: '12px', height: '12px', borderRadius: '50%', background: 'var(--green)', border: '2px solid var(--surface)' }} />}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 600, fontSize: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</span>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{c.time}</span>
                   </div>
                   <div style={{ fontSize: '12px', color: i === 0 ? 'var(--text)' : 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', justifyContent: 'space-between' }}>
                      <span>{c.lastMsg}</span>
                      {c.unread > 0 && <span style={{ padding: '2px 6px', background: 'var(--primary)', color: 'white', borderRadius: '10px', fontSize: '10px', fontWeight: 700 }}>{c.unread}</span>}
                   </div>
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Main: Chat View */}
      <div className="glass-card" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px 32px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>S</div>
              <div>
                 <div style={{ fontWeight: 600 }}>Dr. Suresh Kumar (Parent)</div>
                 <div style={{ fontSize: '12px', color: 'var(--green)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)' }} /> Online
                 </div>
              </div>
           </div>
           <div style={{ display: 'flex', gap: '16px' }}>
              <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><Phone size={20} /></button>
              <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><Mail size={20} /></button>
              <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><MoreHorizontal size={20} /></button>
           </div>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '32px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
           <div style={{ alignSelf: 'flex-start', maxWidth: '70%', background: 'var(--surface)', border: '1px solid var(--border)', padding: '16px', borderRadius: '20px 20px 20px 4px', fontSize: '14px' }}>
              Hello! I'm interested in the upcoming dance exams. Does the exam fee include study materials and books?
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '8px', textAlign: 'right' }}>10:15 AM · <Clock size={11} style={{ verticalAlign: 'middle' }} /></div>
           </div>
           <div style={{ alignSelf: 'flex-end', maxWidth: '70%', background: 'var(--primary)', color: 'white', padding: '16px', borderRadius: '20px 20px 4px 20px', fontSize: '14px' }}>
              Hi Dr. Suresh! Yes, the ₹1000 examination fee includes the certification cost and the basic examination syllabus booklet. Any additional advanced reference books would be extra.
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', marginTop: '8px', textAlign: 'right' }}>10:18 AM · <CheckCheck size={11} style={{ verticalAlign: 'middle' }} /></div>
           </div>
        </div>

        <div style={{ padding: '24px 32px', background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border)' }}>
           <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><Paperclip size={20} /></button>
              <div style={{ flex: 1, position: 'relative' }}>
                 <input className="premium-input" placeholder="Type your message..." style={{ background: 'var(--background)', borderRadius: '14px' }} />
              </div>
              <button className="premium-button" style={{ padding: '10px 20px', borderRadius: '12px' }}>
                 <Send size={18} /> Send
              </button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Support
