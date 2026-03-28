import { Bell, Plus, Calendar, MoreVertical, Megaphone, Flag, Send } from 'lucide-react'

const Announcements = () => {
  const news = [
    { id: '1', title: 'Annual Day Celebrations 2024', body: 'The annual day showcase will be held on 15th April at Town Hall Bangalore. Please confirm participation.', date: 'Today, 2:00 PM', urgency: 'High', type: 'Event' },
    { id: '2', title: 'Summer Workshop Registrations', body: 'Early bird registrations for the summer dance intensive are now open. 20% off for current students.', date: 'Yesterday, 9:00 AM', urgency: 'Medium', type: 'News' },
    { id: '3', title: 'Holiday Notice: Mid-Term', body: 'The institute will remain closed from April 1st to April 5th for mid-term break.', date: '2 days ago', urgency: 'Low', type: 'Alert' },
    { id: '4', title: 'Examination Syllabus Update', body: 'New syllabus modules for Intermediate level are now available in the resource center.', date: '3 days ago', urgency: 'Medium', type: 'Academic' }
  ];

  return (
    <div className="animate-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '32px' }}>Announcements</h2>
          <p style={{ color: 'var(--text-muted)' }}>Institute-wide broadcasts and communications</p>
        </div>
        <button className="premium-button">
          <Plus size={18} /> New Broadcast
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '24px' }}>
         {/* Categories / Filters */}
         <div className="glass-card" style={{ padding: '24px', height: 'fit-content' }}>
            <h3 style={{ fontSize: '18px', marginBottom: '20px', color: 'var(--primary)' }}>Categories</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
               {['All Announcements', 'Academic', 'Events', 'Finance', 'Student Life'].map((c, i) => (
                 <button 
                   key={i} 
                   style={{ 
                     display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', background: i === 0 ? 'var(--primary-glow)' : 'transparent', border: 'none', color: i === 0 ? 'var(--primary)' : 'var(--text-muted)', textAlign: 'left', cursor: 'pointer', fontSize: '14px', fontWeight: i === 0 ? 600 : 400
                   }}
                 >
                   <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: i === 0 ? 'var(--primary)' : 'var(--border)' }} />
                   {c}
                 </button>
               ))}
            </div>

            <h3 style={{ fontSize: '18px', marginTop: '32px', marginBottom: '20px', color: 'var(--accent)' }}>Quick Actions</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
               <button className="premium-button" style={{ fontSize: '13px', padding: '10px', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', width: '100%', justifyContent: 'center' }}>
                  <Megaphone size={14} /> Send SMS Alert
               </button>
               <button className="premium-button" style={{ fontSize: '13px', padding: '10px', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)', width: '100%', justifyContent: 'center' }}>
                  <Send size={14} /> Email All Parents
               </button>
            </div>
         </div>

         {/* Feed */}
         <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {news.map((item, i) => (
               <div key={i} className="glass-card" style={{ padding: '32px', position: 'relative', transition: 'all 0.3s' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                     <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                        <div style={{ padding: '10px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                           <Bell size={20} color={item.urgency === 'High' ? 'var(--red)' : item.urgency === 'Medium' ? 'var(--accent)' : 'var(--primary)'} />
                        </div>
                        <div>
                           <span style={{ fontSize: '11px', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 700 }}>{item.type}</span>
                           <h4 style={{ fontSize: '20px', fontWeight: 700 }}>{item.title}</h4>
                        </div>
                     </div>
                     <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><MoreVertical size={20} /></button>
                  </div>
                  <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>{item.body}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
                     <div style={{ display: 'flex', gap: '20px', fontSize: '13px', color: 'var(--text-muted)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} /> {item.date}</div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                           <Flag size={14} color={item.urgency === 'High' ? 'var(--red)' : 'var(--text-muted)'} /> {item.urgency} Priority
                        </div>
                     </div>
                     <div style={{ display: 'flex', gap: '8px' }}>
                        <button className="premium-button" style={{ padding: '6px 16px', fontSize: '12px', background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>Edit</button>
                        <button className="premium-button" style={{ padding: '6px 16px', fontSize: '12px' }}>Publish Now</button>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
    </div>
  )
}

export default Announcements
