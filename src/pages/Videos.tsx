import { Upload, Play, MoreVertical, Archive, Share2, Download } from 'lucide-react'

const Videos = () => {
  const videos = [
    { id: '1', title: 'Bharatanatyam Adavus Level 1', level: 'Junior', duration: '15:20', uploaded: '2 hours ago', thumbnail: '/api/placeholder/400/225' },
    { id: '2', title: 'Mudras for Expressions', level: 'Intermediate', duration: '08:45', uploaded: 'Yesterday', thumbnail: '/api/placeholder/400/225' },
    { id: '3', title: 'Advanced Padam Practice', level: 'Advanced', duration: '24:10', uploaded: '3 days ago', thumbnail: '/api/placeholder/400/225' },
    { id: '4', title: 'Monthly Assessment Guide', level: 'All Levels', duration: '05:30', uploaded: '1 week ago', thumbnail: '/api/placeholder/400/225' },
  ];

  return (
    <div className="animate-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
        <div>
          <h2 style={{ fontSize: '32px' }}>Class Videos Cloud</h2>
          <p style={{ color: 'var(--text-muted)' }}>Secure institutional storage for class recordings and tutorials</p>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="premium-button" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
            <Archive size={18} /> Managed Archives
          </button>
          <button className="premium-button">
            <Upload size={18} /> Upload New Recording
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', padding: '8px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', width: 'fit-content' }}>
        {['All Classes', 'Junior', 'Intermediate', 'Advanced', 'Assessments'].map((cat, i) => (
          <button 
            key={i} 
            className="premium-button" 
            style={{ 
              background: i === 0 ? 'var(--primary-glow)' : 'transparent', 
              color: i === 0 ? 'var(--primary)' : 'var(--text-muted)', 
              border: i === 0 ? '1px solid var(--primary)' : '1px solid transparent',
              padding: '8px 16px',
              fontSize: '13px'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
        {videos.map((vid, i) => (
          <div key={i} className="glass-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}>
              <img src={vid.thumbnail} alt={vid.title} style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.6))' }} />
              <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.8)', padding: '2px 6px', borderRadius: '4px', fontSize: '11px', fontWeight: 600 }}>{vid.duration}</div>
              <div className="play-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0 }}>
                 <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Play fill="white" size={24} />
                 </div>
              </div>
            </div>
            <div style={{ padding: '20px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', alignItems: 'flex-start' }}>
                <h4 style={{ fontSize: '16px' }}>{vid.title}</h4>
                <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><MoreVertical size={16} /></button>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                 <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '12px', background: 'var(--primary-glow)', color: 'var(--primary)', fontWeight: 600 }}>
                   {vid.level}
                 </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                 <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{vid.uploaded}</span>
                 <div style={{ display: 'flex', gap: '12px' }}>
                    <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><Share2 size={16} /></button>
                    <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><Download size={16} /></button>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Videos
