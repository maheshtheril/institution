import { Upload, Play, MoreVertical, Archive, Share2, Download, Clock, BookOpen } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const Videos = () => {
  const { user } = useAuth();
  const isAdmin = user?.role?.toUpperCase() === 'ADMIN';

  const videos = [
    { id: '1', title: 'Bharatanatyam Adavus Level 1', level: 'Junior', duration: '15:20', uploaded: '2 hours ago', thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80' },
    { id: '2', title: 'Mudras for Expressions', level: 'Intermediate', duration: '08:45', uploaded: 'Yesterday', thumbnail: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80' },
    { id: '3', title: 'Advanced Padam Practice', level: 'Advanced', duration: '24:10', uploaded: '3 days ago', thumbnail: 'https://images.unsplash.com/photo-1547049082-1a12c3bf2b76?w=800&q=80' },
    { id: '4', title: 'Monthly Assessment Guide', level: 'All Levels', duration: '05:30', uploaded: '1 week ago', thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80' },
  ];

  return (
    <div className="animate-in">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <h2 style={{ fontSize: '32px' }}>{isAdmin ? 'Institutional Video Cloud' : 'Learning Resources'}</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            {isAdmin ? 'Manage institutional storage for class recordings and tutorials' : 'Access your class recordings, tutorials and assessments'}
          </p>
        </div>
        {isAdmin && (
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="premium-button" style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
              <Archive size={18} /> Managed Archives
            </button>
            <button className="premium-button">
              <Upload size={18} /> Upload Recording
            </button>
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '12px', marginBottom: '32px', padding: '8px', background: 'rgba(255,255,255,0.02)', borderRadius: '12px', width: 'fit-content', overflowX: 'auto', maxWidth: '100%' }}>
        {['All Classes', 'Junior', 'Intermediate', 'Advanced', 'Assessments'].map((cat, i) => (
          <button 
            key={i} 
            className="premium-button" 
            style={{ 
              background: i === 0 ? 'var(--primary-glow)' : 'transparent', 
              color: i === 0 ? 'var(--primary)' : 'var(--text-muted)', 
              border: i === 0 ? '1px solid hsla(265, 85%, 65%, 0.2)' : '1px solid transparent',
              padding: '8px 16px',
              fontSize: '13px',
              whiteSpace: 'nowrap'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
        {videos.map((vid, i) => (
          <div key={i} className="glass-card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column', border: '1px solid hsla(0,0%,100%,0.05)' }}>
            <div style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', aspectRatio: '16/9' }}>
              <img src={vid.thumbnail} alt={vid.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: '0.4s ease' }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8))' }} />
              <div style={{ position: 'absolute', bottom: '12px', right: '12px', background: 'rgba(0,0,0,0.8)', padding: '4px 8px', borderRadius: '6px', fontSize: '11px', fontWeight: 700, backdropFilter: 'blur(4px)' }}>
                {vid.duration}
              </div>
              <div className="play-overlay" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 20px var(--primary-glow)' }}>
                    <Play fill="white" size={24} />
                 </div>
              </div>
            </div>
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px', alignItems: 'flex-start' }}>
                <h4 style={{ fontSize: '17px', fontWeight: 600, margin: 0, color: 'white' }}>{vid.title}</h4>
                {isAdmin && (
                    <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><MoreVertical size={18} /></button>
                )}
              </div>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', padding: '4px 10px', borderRadius: '12px', background: 'var(--primary-glow)', color: 'var(--primary)', fontWeight: 700 }}>
                   <BookOpen size={12} /> {vid.level}
                 </div>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', padding: '4px 10px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', fontWeight: 600 }}>
                   <Clock size={12} /> HD Quality
                 </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '16px' }}>
                 <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Added {vid.uploaded}</span>
                 <div style={{ display: 'flex', gap: '16px' }}>
                    <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', transition: '0.2s' }}><Share2 size={18} /></button>
                    <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', transition: '0.2s' }}><Download size={18} /></button>
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
